export const STRING = Symbol('ENV_STRING')
export const NUMBER = Symbol('ENV_NUMBER')
export const OBJECT = Symbol('ENV_OBJECT')
export const DATE = Symbol('ENV_DATE')
export type EnvironmentType = typeof STRING | typeof NUMBER | typeof OBJECT | typeof DATE
type EnvironmentSchema = Record<symbol, EnvironmentType>

function parseValue(value: string, type: EnvironmentType) {
  switch (type) {
    case NUMBER: {
      return Number(value)
    }

    case OBJECT: {
      return JSON.parse(value)
    }

    case DATE: {
      return new Date(value)
    }

    default: {
      return value
    }
  }
}

export default function forceEnvironmentVars<E extends EnvironmentSchema>(
  environmentSchema: E,
  defaultValues?: {
    [key in keyof E]?: unknown
  }
) {
  const envVars: {
    [key in keyof E]?: unknown
  } = {}

  Object.entries(environmentSchema).forEach(([variableName, variableType]) => {
    if (process.env[variableName]) {
      envVars[variableName as keyof E] = parseValue(
        process.env[variableName] as string,
        variableType as EnvironmentType
      )
      return
    }

    const defaultValue = defaultValues?.[variableName as keyof E]
    if (defaultValue == null) {
      throw new Error(`Environment Variable ${variableName} not found`)
    }

    envVars[variableName as keyof E] = defaultValue
  })

  return envVars
}
