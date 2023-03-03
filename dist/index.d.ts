declare const STRING: unique symbol;
declare const NUMBER: unique symbol;
declare const OBJECT: unique symbol;
declare const DATE: unique symbol;
type EnvironmentType = typeof STRING | typeof NUMBER | typeof OBJECT | typeof DATE;
type EnvironmentSchema = Record<symbol, EnvironmentType>;
declare function forceEnvironmentVars<E extends EnvironmentSchema>(environmentSchema: E, defaultValues?: {
    [key in keyof E]?: unknown;
}): { [key in keyof E]?: unknown; };

export { DATE, EnvironmentType, NUMBER, OBJECT, STRING, forceEnvironmentVars as default };
