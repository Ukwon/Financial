
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TransactionTag
 * 
 */
export type TransactionTag = $Result.DefaultSelection<Prisma.$TransactionTagPayload>
/**
 * Model MonthlyTagBudget
 * 
 */
export type MonthlyTagBudget = $Result.DefaultSelection<Prisma.$MonthlyTagBudgetPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model PlanTag
 * 
 */
export type PlanTag = $Result.DefaultSelection<Prisma.$PlanTagPayload>
/**
 * Model PlanOccurrence
 * 
 */
export type PlanOccurrence = $Result.DefaultSelection<Prisma.$PlanOccurrencePayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model GoalAllocation
 * 
 */
export type GoalAllocation = $Result.DefaultSelection<Prisma.$GoalAllocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TRANSFER: 'TRANSFER'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const PlanType: {
  INSTALLMENT: 'INSTALLMENT',
  RECURRING: 'RECURRING'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const RecurrenceUnit: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type RecurrenceUnit = (typeof RecurrenceUnit)[keyof typeof RecurrenceUnit]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type RecurrenceUnit = $Enums.RecurrenceUnit

export const RecurrenceUnit: typeof $Enums.RecurrenceUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wallets
 * const wallets = await prisma.wallet.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Wallets
   * const wallets = await prisma.wallet.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionTag`: Exposes CRUD operations for the **TransactionTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTags
    * const transactionTags = await prisma.transactionTag.findMany()
    * ```
    */
  get transactionTag(): Prisma.TransactionTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyTagBudget`: Exposes CRUD operations for the **MonthlyTagBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyTagBudgets
    * const monthlyTagBudgets = await prisma.monthlyTagBudget.findMany()
    * ```
    */
  get monthlyTagBudget(): Prisma.MonthlyTagBudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planTag`: Exposes CRUD operations for the **PlanTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanTags
    * const planTags = await prisma.planTag.findMany()
    * ```
    */
  get planTag(): Prisma.PlanTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planOccurrence`: Exposes CRUD operations for the **PlanOccurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanOccurrences
    * const planOccurrences = await prisma.planOccurrence.findMany()
    * ```
    */
  get planOccurrence(): Prisma.PlanOccurrenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goalAllocation`: Exposes CRUD operations for the **GoalAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoalAllocations
    * const goalAllocations = await prisma.goalAllocation.findMany()
    * ```
    */
  get goalAllocation(): Prisma.GoalAllocationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Wallet: 'Wallet',
    Category: 'Category',
    Transaction: 'Transaction',
    Tag: 'Tag',
    TransactionTag: 'TransactionTag',
    MonthlyTagBudget: 'MonthlyTagBudget',
    Plan: 'Plan',
    PlanTag: 'PlanTag',
    PlanOccurrence: 'PlanOccurrence',
    Goal: 'Goal',
    GoalAllocation: 'GoalAllocation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "wallet" | "category" | "transaction" | "tag" | "transactionTag" | "monthlyTagBudget" | "plan" | "planTag" | "planOccurrence" | "goal" | "goalAllocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TransactionTag: {
        payload: Prisma.$TransactionTagPayload<ExtArgs>
        fields: Prisma.TransactionTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          findFirst: {
            args: Prisma.TransactionTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          findMany: {
            args: Prisma.TransactionTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>[]
          }
          create: {
            args: Prisma.TransactionTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          createMany: {
            args: Prisma.TransactionTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>[]
          }
          delete: {
            args: Prisma.TransactionTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          update: {
            args: Prisma.TransactionTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          deleteMany: {
            args: Prisma.TransactionTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>[]
          }
          upsert: {
            args: Prisma.TransactionTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTagPayload>
          }
          aggregate: {
            args: Prisma.TransactionTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionTag>
          }
          groupBy: {
            args: Prisma.TransactionTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTagCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTagCountAggregateOutputType> | number
          }
        }
      }
      MonthlyTagBudget: {
        payload: Prisma.$MonthlyTagBudgetPayload<ExtArgs>
        fields: Prisma.MonthlyTagBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyTagBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyTagBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          findFirst: {
            args: Prisma.MonthlyTagBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyTagBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          findMany: {
            args: Prisma.MonthlyTagBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>[]
          }
          create: {
            args: Prisma.MonthlyTagBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          createMany: {
            args: Prisma.MonthlyTagBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyTagBudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>[]
          }
          delete: {
            args: Prisma.MonthlyTagBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          update: {
            args: Prisma.MonthlyTagBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyTagBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyTagBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyTagBudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyTagBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyTagBudgetPayload>
          }
          aggregate: {
            args: Prisma.MonthlyTagBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyTagBudget>
          }
          groupBy: {
            args: Prisma.MonthlyTagBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyTagBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyTagBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyTagBudgetCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      PlanTag: {
        payload: Prisma.$PlanTagPayload<ExtArgs>
        fields: Prisma.PlanTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          findFirst: {
            args: Prisma.PlanTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          findMany: {
            args: Prisma.PlanTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          create: {
            args: Prisma.PlanTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          createMany: {
            args: Prisma.PlanTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          delete: {
            args: Prisma.PlanTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          update: {
            args: Prisma.PlanTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          deleteMany: {
            args: Prisma.PlanTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>[]
          }
          upsert: {
            args: Prisma.PlanTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTagPayload>
          }
          aggregate: {
            args: Prisma.PlanTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanTag>
          }
          groupBy: {
            args: Prisma.PlanTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanTagCountArgs<ExtArgs>
            result: $Utils.Optional<PlanTagCountAggregateOutputType> | number
          }
        }
      }
      PlanOccurrence: {
        payload: Prisma.$PlanOccurrencePayload<ExtArgs>
        fields: Prisma.PlanOccurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanOccurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanOccurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          findFirst: {
            args: Prisma.PlanOccurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanOccurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          findMany: {
            args: Prisma.PlanOccurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>[]
          }
          create: {
            args: Prisma.PlanOccurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          createMany: {
            args: Prisma.PlanOccurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanOccurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>[]
          }
          delete: {
            args: Prisma.PlanOccurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          update: {
            args: Prisma.PlanOccurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          deleteMany: {
            args: Prisma.PlanOccurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanOccurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanOccurrenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>[]
          }
          upsert: {
            args: Prisma.PlanOccurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanOccurrencePayload>
          }
          aggregate: {
            args: Prisma.PlanOccurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanOccurrence>
          }
          groupBy: {
            args: Prisma.PlanOccurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanOccurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanOccurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<PlanOccurrenceCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      GoalAllocation: {
        payload: Prisma.$GoalAllocationPayload<ExtArgs>
        fields: Prisma.GoalAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          findFirst: {
            args: Prisma.GoalAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          findMany: {
            args: Prisma.GoalAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>[]
          }
          create: {
            args: Prisma.GoalAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          createMany: {
            args: Prisma.GoalAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>[]
          }
          delete: {
            args: Prisma.GoalAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          update: {
            args: Prisma.GoalAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          deleteMany: {
            args: Prisma.GoalAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalAllocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>[]
          }
          upsert: {
            args: Prisma.GoalAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalAllocationPayload>
          }
          aggregate: {
            args: Prisma.GoalAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoalAllocation>
          }
          groupBy: {
            args: Prisma.GoalAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<GoalAllocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    wallet?: WalletOmit
    category?: CategoryOmit
    transaction?: TransactionOmit
    tag?: TagOmit
    transactionTag?: TransactionTagOmit
    monthlyTagBudget?: MonthlyTagBudgetOmit
    plan?: PlanOmit
    planTag?: PlanTagOmit
    planOccurrence?: PlanOccurrenceOmit
    goal?: GoalOmit
    goalAllocation?: GoalAllocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transactions: number
    plans: number
    goals: number
    tags: number
    tagBudgets: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
    plans?: boolean | WalletCountOutputTypeCountPlansArgs
    goals?: boolean | WalletCountOutputTypeCountGoalsArgs
    tags?: boolean | WalletCountOutputTypeCountTagsArgs
    tagBudgets?: boolean | WalletCountOutputTypeCountTagBudgetsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTagBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyTagBudgetWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    plans: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    plans?: boolean | CategoryCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    goalAllocations: number
    tags: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goalAllocations?: boolean | TransactionCountOutputTypeCountGoalAllocationsArgs
    tags?: boolean | TransactionCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountGoalAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalAllocationWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    transactions: number
    plans: number
    budgets: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TagCountOutputTypeCountTransactionsArgs
    plans?: boolean | TagCountOutputTypeCountPlansArgs
    budgets?: boolean | TagCountOutputTypeCountBudgetsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyTagBudgetWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    occurrences: number
    transactions: number
    tags: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occurrences?: boolean | PlanCountOutputTypeCountOccurrencesArgs
    transactions?: boolean | PlanCountOutputTypeCountTransactionsArgs
    tags?: boolean | PlanCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountOccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanOccurrenceWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    allocations: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | GoalCountOutputTypeCountAllocationsArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalAllocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    plans?: boolean | Wallet$plansArgs<ExtArgs>
    goals?: boolean | Wallet$goalsArgs<ExtArgs>
    tags?: boolean | Wallet$tagsArgs<ExtArgs>
    tagBudgets?: boolean | Wallet$tagBudgetsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    plans?: boolean | Wallet$plansArgs<ExtArgs>
    goals?: boolean | Wallet$goalsArgs<ExtArgs>
    tags?: boolean | Wallet$tagsArgs<ExtArgs>
    tagBudgets?: boolean | Wallet$tagBudgetsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      tagBudgets: Prisma.$MonthlyTagBudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Wallet$plansArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends Wallet$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Wallet$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tagBudgets<T extends Wallet$tagBudgetsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$tagBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly name: FieldRef<"Wallet", 'String'>
    readonly description: FieldRef<"Wallet", 'String'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet.plans
   */
  export type Wallet$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Wallet.goals
   */
  export type Wallet$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Wallet.tags
   */
  export type Wallet$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Wallet.tagBudgets
   */
  export type Wallet$tagBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    where?: MonthlyTagBudgetWhereInput
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    cursor?: MonthlyTagBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyTagBudgetScalarFieldEnum | MonthlyTagBudgetScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    kind: $Enums.TransactionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    kind: $Enums.TransactionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    kind: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    kind: $Enums.TransactionType
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    plans?: boolean | Category$plansArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "kind" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    plans?: boolean | Category$plansArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      kind: $Enums.TransactionType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Category$plansArgs<ExtArgs> = {}>(args?: Subset<T, Category$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly kind: FieldRef<"Category", 'TransactionType'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.plans
   */
  export type Category$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amountCents: number | null
    installmentIndex: number | null
    installmentTotal: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amountCents: number | null
    installmentIndex: number | null
    installmentTotal: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    categoryId: string | null
    type: $Enums.TransactionType | null
    description: string | null
    amountCents: number | null
    dueDate: Date | null
    settlementDueDate: Date | null
    paidAt: Date | null
    sourcePlanId: string | null
    installmentIndex: number | null
    installmentTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    categoryId: string | null
    type: $Enums.TransactionType | null
    description: string | null
    amountCents: number | null
    dueDate: Date | null
    settlementDueDate: Date | null
    paidAt: Date | null
    sourcePlanId: string | null
    installmentIndex: number | null
    installmentTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    walletId: number
    categoryId: number
    type: number
    description: number
    amountCents: number
    dueDate: number
    settlementDueDate: number
    paidAt: number
    sourcePlanId: number
    installmentIndex: number
    installmentTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amountCents?: true
    installmentIndex?: true
    installmentTotal?: true
  }

  export type TransactionSumAggregateInputType = {
    amountCents?: true
    installmentIndex?: true
    installmentTotal?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    description?: true
    amountCents?: true
    dueDate?: true
    settlementDueDate?: true
    paidAt?: true
    sourcePlanId?: true
    installmentIndex?: true
    installmentTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    description?: true
    amountCents?: true
    dueDate?: true
    settlementDueDate?: true
    paidAt?: true
    sourcePlanId?: true
    installmentIndex?: true
    installmentTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    description?: true
    amountCents?: true
    dueDate?: true
    settlementDueDate?: true
    paidAt?: true
    sourcePlanId?: true
    installmentIndex?: true
    installmentTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    walletId: string
    categoryId: string | null
    type: $Enums.TransactionType
    description: string | null
    amountCents: number
    dueDate: Date
    settlementDueDate: Date | null
    paidAt: Date | null
    sourcePlanId: string | null
    installmentIndex: number | null
    installmentTotal: number | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    description?: boolean
    amountCents?: boolean
    dueDate?: boolean
    settlementDueDate?: boolean
    paidAt?: boolean
    sourcePlanId?: boolean
    installmentIndex?: boolean
    installmentTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
    goalAllocations?: boolean | Transaction$goalAllocationsArgs<ExtArgs>
    tags?: boolean | Transaction$tagsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    description?: boolean
    amountCents?: boolean
    dueDate?: boolean
    settlementDueDate?: boolean
    paidAt?: boolean
    sourcePlanId?: boolean
    installmentIndex?: boolean
    installmentTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    description?: boolean
    amountCents?: boolean
    dueDate?: boolean
    settlementDueDate?: boolean
    paidAt?: boolean
    sourcePlanId?: boolean
    installmentIndex?: boolean
    installmentTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    description?: boolean
    amountCents?: boolean
    dueDate?: boolean
    settlementDueDate?: boolean
    paidAt?: boolean
    sourcePlanId?: boolean
    installmentIndex?: boolean
    installmentTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "categoryId" | "type" | "description" | "amountCents" | "dueDate" | "settlementDueDate" | "paidAt" | "sourcePlanId" | "installmentIndex" | "installmentTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
    goalAllocations?: boolean | Transaction$goalAllocationsArgs<ExtArgs>
    tags?: boolean | Transaction$tagsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sourcePlan?: boolean | Transaction$sourcePlanArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      sourcePlan: Prisma.$PlanPayload<ExtArgs> | null
      goalAllocations: Prisma.$GoalAllocationPayload<ExtArgs>[]
      tags: Prisma.$TransactionTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      categoryId: string | null
      type: $Enums.TransactionType
      description: string | null
      amountCents: number
      dueDate: Date
      settlementDueDate: Date | null
      paidAt: Date | null
      sourcePlanId: string | null
      installmentIndex: number | null
      installmentTotal: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourcePlan<T extends Transaction$sourcePlanArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$sourcePlanArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goalAllocations<T extends Transaction$goalAllocationsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$goalAllocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Transaction$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly walletId: FieldRef<"Transaction", 'String'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amountCents: FieldRef<"Transaction", 'Int'>
    readonly dueDate: FieldRef<"Transaction", 'DateTime'>
    readonly settlementDueDate: FieldRef<"Transaction", 'DateTime'>
    readonly paidAt: FieldRef<"Transaction", 'DateTime'>
    readonly sourcePlanId: FieldRef<"Transaction", 'String'>
    readonly installmentIndex: FieldRef<"Transaction", 'Int'>
    readonly installmentTotal: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Transaction.sourcePlan
   */
  export type Transaction$sourcePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Transaction.goalAllocations
   */
  export type Transaction$goalAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    where?: GoalAllocationWhereInput
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    cursor?: GoalAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalAllocationScalarFieldEnum | GoalAllocationScalarFieldEnum[]
  }

  /**
   * Transaction.tags
   */
  export type Transaction$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    where?: TransactionTagWhereInput
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    cursor?: TransactionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTagScalarFieldEnum | TransactionTagScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    name: string | null
    color: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    name: string | null
    color: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    walletId: number
    name: number
    color: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    color?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    color?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    color?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    walletId: string
    name: string
    color: string
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    color?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transactions?: boolean | Tag$transactionsArgs<ExtArgs>
    plans?: boolean | Tag$plansArgs<ExtArgs>
    budgets?: boolean | Tag$budgetsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    color?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    color?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    walletId?: boolean
    name?: boolean
    color?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "name" | "color" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transactions?: boolean | Tag$transactionsArgs<ExtArgs>
    plans?: boolean | Tag$plansArgs<ExtArgs>
    budgets?: boolean | Tag$budgetsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      transactions: Prisma.$TransactionTagPayload<ExtArgs>[]
      plans: Prisma.$PlanTagPayload<ExtArgs>[]
      budgets: Prisma.$MonthlyTagBudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      name: string
      color: string
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Tag$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Tag$plansArgs<ExtArgs> = {}>(args?: Subset<T, Tag$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends Tag$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly walletId: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly isArchived: FieldRef<"Tag", 'Boolean'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.transactions
   */
  export type Tag$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    where?: TransactionTagWhereInput
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    cursor?: TransactionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTagScalarFieldEnum | TransactionTagScalarFieldEnum[]
  }

  /**
   * Tag.plans
   */
  export type Tag$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    cursor?: PlanTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * Tag.budgets
   */
  export type Tag$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    where?: MonthlyTagBudgetWhereInput
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    cursor?: MonthlyTagBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyTagBudgetScalarFieldEnum | MonthlyTagBudgetScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TransactionTag
   */

  export type AggregateTransactionTag = {
    _count: TransactionTagCountAggregateOutputType | null
    _min: TransactionTagMinAggregateOutputType | null
    _max: TransactionTagMaxAggregateOutputType | null
  }

  export type TransactionTagMinAggregateOutputType = {
    transactionId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type TransactionTagMaxAggregateOutputType = {
    transactionId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type TransactionTagCountAggregateOutputType = {
    transactionId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type TransactionTagMinAggregateInputType = {
    transactionId?: true
    tagId?: true
    createdAt?: true
  }

  export type TransactionTagMaxAggregateInputType = {
    transactionId?: true
    tagId?: true
    createdAt?: true
  }

  export type TransactionTagCountAggregateInputType = {
    transactionId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTag to aggregate.
     */
    where?: TransactionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTags to fetch.
     */
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTags
    **/
    _count?: true | TransactionTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTagMaxAggregateInputType
  }

  export type GetTransactionTagAggregateType<T extends TransactionTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionTag[P]>
      : GetScalarType<T[P], AggregateTransactionTag[P]>
  }




  export type TransactionTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTagWhereInput
    orderBy?: TransactionTagOrderByWithAggregationInput | TransactionTagOrderByWithAggregationInput[]
    by: TransactionTagScalarFieldEnum[] | TransactionTagScalarFieldEnum
    having?: TransactionTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTagCountAggregateInputType | true
    _min?: TransactionTagMinAggregateInputType
    _max?: TransactionTagMaxAggregateInputType
  }

  export type TransactionTagGroupByOutputType = {
    transactionId: string
    tagId: string
    createdAt: Date
    _count: TransactionTagCountAggregateOutputType | null
    _min: TransactionTagMinAggregateOutputType | null
    _max: TransactionTagMaxAggregateOutputType | null
  }

  type GetTransactionTagGroupByPayload<T extends TransactionTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTagGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTagGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    tagId?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTag"]>

  export type TransactionTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    tagId?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTag"]>

  export type TransactionTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    tagId?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTag"]>

  export type TransactionTagSelectScalar = {
    transactionId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type TransactionTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transactionId" | "tagId" | "createdAt", ExtArgs["result"]["transactionTag"]>
  export type TransactionTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TransactionTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TransactionTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TransactionTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionTag"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transactionId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["transactionTag"]>
    composites: {}
  }

  type TransactionTagGetPayload<S extends boolean | null | undefined | TransactionTagDefaultArgs> = $Result.GetResult<Prisma.$TransactionTagPayload, S>

  type TransactionTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTagCountAggregateInputType | true
    }

  export interface TransactionTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionTag'], meta: { name: 'TransactionTag' } }
    /**
     * Find zero or one TransactionTag that matches the filter.
     * @param {TransactionTagFindUniqueArgs} args - Arguments to find a TransactionTag
     * @example
     * // Get one TransactionTag
     * const transactionTag = await prisma.transactionTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTagFindUniqueArgs>(args: SelectSubset<T, TransactionTagFindUniqueArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTagFindUniqueOrThrowArgs} args - Arguments to find a TransactionTag
     * @example
     * // Get one TransactionTag
     * const transactionTag = await prisma.transactionTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagFindFirstArgs} args - Arguments to find a TransactionTag
     * @example
     * // Get one TransactionTag
     * const transactionTag = await prisma.transactionTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTagFindFirstArgs>(args?: SelectSubset<T, TransactionTagFindFirstArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagFindFirstOrThrowArgs} args - Arguments to find a TransactionTag
     * @example
     * // Get one TransactionTag
     * const transactionTag = await prisma.transactionTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTags
     * const transactionTags = await prisma.transactionTag.findMany()
     * 
     * // Get first 10 TransactionTags
     * const transactionTags = await prisma.transactionTag.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const transactionTagWithTransactionIdOnly = await prisma.transactionTag.findMany({ select: { transactionId: true } })
     * 
     */
    findMany<T extends TransactionTagFindManyArgs>(args?: SelectSubset<T, TransactionTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionTag.
     * @param {TransactionTagCreateArgs} args - Arguments to create a TransactionTag.
     * @example
     * // Create one TransactionTag
     * const TransactionTag = await prisma.transactionTag.create({
     *   data: {
     *     // ... data to create a TransactionTag
     *   }
     * })
     * 
     */
    create<T extends TransactionTagCreateArgs>(args: SelectSubset<T, TransactionTagCreateArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTags.
     * @param {TransactionTagCreateManyArgs} args - Arguments to create many TransactionTags.
     * @example
     * // Create many TransactionTags
     * const transactionTag = await prisma.transactionTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTagCreateManyArgs>(args?: SelectSubset<T, TransactionTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionTags and returns the data saved in the database.
     * @param {TransactionTagCreateManyAndReturnArgs} args - Arguments to create many TransactionTags.
     * @example
     * // Create many TransactionTags
     * const transactionTag = await prisma.transactionTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionTags and only return the `transactionId`
     * const transactionTagWithTransactionIdOnly = await prisma.transactionTag.createManyAndReturn({
     *   select: { transactionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionTagCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionTag.
     * @param {TransactionTagDeleteArgs} args - Arguments to delete one TransactionTag.
     * @example
     * // Delete one TransactionTag
     * const TransactionTag = await prisma.transactionTag.delete({
     *   where: {
     *     // ... filter to delete one TransactionTag
     *   }
     * })
     * 
     */
    delete<T extends TransactionTagDeleteArgs>(args: SelectSubset<T, TransactionTagDeleteArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionTag.
     * @param {TransactionTagUpdateArgs} args - Arguments to update one TransactionTag.
     * @example
     * // Update one TransactionTag
     * const transactionTag = await prisma.transactionTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTagUpdateArgs>(args: SelectSubset<T, TransactionTagUpdateArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTags.
     * @param {TransactionTagDeleteManyArgs} args - Arguments to filter TransactionTags to delete.
     * @example
     * // Delete a few TransactionTags
     * const { count } = await prisma.transactionTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTagDeleteManyArgs>(args?: SelectSubset<T, TransactionTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTags
     * const transactionTag = await prisma.transactionTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTagUpdateManyArgs>(args: SelectSubset<T, TransactionTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTags and returns the data updated in the database.
     * @param {TransactionTagUpdateManyAndReturnArgs} args - Arguments to update many TransactionTags.
     * @example
     * // Update many TransactionTags
     * const transactionTag = await prisma.transactionTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionTags and only return the `transactionId`
     * const transactionTagWithTransactionIdOnly = await prisma.transactionTag.updateManyAndReturn({
     *   select: { transactionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionTagUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionTag.
     * @param {TransactionTagUpsertArgs} args - Arguments to update or create a TransactionTag.
     * @example
     * // Update or create a TransactionTag
     * const transactionTag = await prisma.transactionTag.upsert({
     *   create: {
     *     // ... data to create a TransactionTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionTag we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTagUpsertArgs>(args: SelectSubset<T, TransactionTagUpsertArgs<ExtArgs>>): Prisma__TransactionTagClient<$Result.GetResult<Prisma.$TransactionTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagCountArgs} args - Arguments to filter TransactionTags to count.
     * @example
     * // Count the number of TransactionTags
     * const count = await prisma.transactionTag.count({
     *   where: {
     *     // ... the filter for the TransactionTags we want to count
     *   }
     * })
    **/
    count<T extends TransactionTagCountArgs>(
      args?: Subset<T, TransactionTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionTagAggregateArgs>(args: Subset<T, TransactionTagAggregateArgs>): Prisma.PrismaPromise<GetTransactionTagAggregateType<T>>

    /**
     * Group by TransactionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTagGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionTag model
   */
  readonly fields: TransactionTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionTag model
   */
  interface TransactionTagFieldRefs {
    readonly transactionId: FieldRef<"TransactionTag", 'String'>
    readonly tagId: FieldRef<"TransactionTag", 'String'>
    readonly createdAt: FieldRef<"TransactionTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionTag findUnique
   */
  export type TransactionTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTag to fetch.
     */
    where: TransactionTagWhereUniqueInput
  }

  /**
   * TransactionTag findUniqueOrThrow
   */
  export type TransactionTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTag to fetch.
     */
    where: TransactionTagWhereUniqueInput
  }

  /**
   * TransactionTag findFirst
   */
  export type TransactionTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTag to fetch.
     */
    where?: TransactionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTags to fetch.
     */
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTags.
     */
    cursor?: TransactionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTags.
     */
    distinct?: TransactionTagScalarFieldEnum | TransactionTagScalarFieldEnum[]
  }

  /**
   * TransactionTag findFirstOrThrow
   */
  export type TransactionTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTag to fetch.
     */
    where?: TransactionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTags to fetch.
     */
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTags.
     */
    cursor?: TransactionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTags.
     */
    distinct?: TransactionTagScalarFieldEnum | TransactionTagScalarFieldEnum[]
  }

  /**
   * TransactionTag findMany
   */
  export type TransactionTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTags to fetch.
     */
    where?: TransactionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTags to fetch.
     */
    orderBy?: TransactionTagOrderByWithRelationInput | TransactionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTags.
     */
    cursor?: TransactionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTags.
     */
    skip?: number
    distinct?: TransactionTagScalarFieldEnum | TransactionTagScalarFieldEnum[]
  }

  /**
   * TransactionTag create
   */
  export type TransactionTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionTag.
     */
    data: XOR<TransactionTagCreateInput, TransactionTagUncheckedCreateInput>
  }

  /**
   * TransactionTag createMany
   */
  export type TransactionTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTags.
     */
    data: TransactionTagCreateManyInput | TransactionTagCreateManyInput[]
  }

  /**
   * TransactionTag createManyAndReturn
   */
  export type TransactionTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionTags.
     */
    data: TransactionTagCreateManyInput | TransactionTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTag update
   */
  export type TransactionTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionTag.
     */
    data: XOR<TransactionTagUpdateInput, TransactionTagUncheckedUpdateInput>
    /**
     * Choose, which TransactionTag to update.
     */
    where: TransactionTagWhereUniqueInput
  }

  /**
   * TransactionTag updateMany
   */
  export type TransactionTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTags.
     */
    data: XOR<TransactionTagUpdateManyMutationInput, TransactionTagUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTags to update
     */
    where?: TransactionTagWhereInput
    /**
     * Limit how many TransactionTags to update.
     */
    limit?: number
  }

  /**
   * TransactionTag updateManyAndReturn
   */
  export type TransactionTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * The data used to update TransactionTags.
     */
    data: XOR<TransactionTagUpdateManyMutationInput, TransactionTagUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTags to update
     */
    where?: TransactionTagWhereInput
    /**
     * Limit how many TransactionTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTag upsert
   */
  export type TransactionTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionTag to update in case it exists.
     */
    where: TransactionTagWhereUniqueInput
    /**
     * In case the TransactionTag found by the `where` argument doesn't exist, create a new TransactionTag with this data.
     */
    create: XOR<TransactionTagCreateInput, TransactionTagUncheckedCreateInput>
    /**
     * In case the TransactionTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTagUpdateInput, TransactionTagUncheckedUpdateInput>
  }

  /**
   * TransactionTag delete
   */
  export type TransactionTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
    /**
     * Filter which TransactionTag to delete.
     */
    where: TransactionTagWhereUniqueInput
  }

  /**
   * TransactionTag deleteMany
   */
  export type TransactionTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTags to delete
     */
    where?: TransactionTagWhereInput
    /**
     * Limit how many TransactionTags to delete.
     */
    limit?: number
  }

  /**
   * TransactionTag without action
   */
  export type TransactionTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTag
     */
    select?: TransactionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTag
     */
    omit?: TransactionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTagInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyTagBudget
   */

  export type AggregateMonthlyTagBudget = {
    _count: MonthlyTagBudgetCountAggregateOutputType | null
    _avg: MonthlyTagBudgetAvgAggregateOutputType | null
    _sum: MonthlyTagBudgetSumAggregateOutputType | null
    _min: MonthlyTagBudgetMinAggregateOutputType | null
    _max: MonthlyTagBudgetMaxAggregateOutputType | null
  }

  export type MonthlyTagBudgetAvgAggregateOutputType = {
    limitCents: number | null
  }

  export type MonthlyTagBudgetSumAggregateOutputType = {
    limitCents: number | null
  }

  export type MonthlyTagBudgetMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    tagId: string | null
    monthKey: string | null
    limitCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyTagBudgetMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    tagId: string | null
    monthKey: string | null
    limitCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyTagBudgetCountAggregateOutputType = {
    id: number
    walletId: number
    tagId: number
    monthKey: number
    limitCents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyTagBudgetAvgAggregateInputType = {
    limitCents?: true
  }

  export type MonthlyTagBudgetSumAggregateInputType = {
    limitCents?: true
  }

  export type MonthlyTagBudgetMinAggregateInputType = {
    id?: true
    walletId?: true
    tagId?: true
    monthKey?: true
    limitCents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyTagBudgetMaxAggregateInputType = {
    id?: true
    walletId?: true
    tagId?: true
    monthKey?: true
    limitCents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyTagBudgetCountAggregateInputType = {
    id?: true
    walletId?: true
    tagId?: true
    monthKey?: true
    limitCents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyTagBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyTagBudget to aggregate.
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyTagBudgets to fetch.
     */
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyTagBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyTagBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyTagBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyTagBudgets
    **/
    _count?: true | MonthlyTagBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyTagBudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyTagBudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyTagBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyTagBudgetMaxAggregateInputType
  }

  export type GetMonthlyTagBudgetAggregateType<T extends MonthlyTagBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyTagBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyTagBudget[P]>
      : GetScalarType<T[P], AggregateMonthlyTagBudget[P]>
  }




  export type MonthlyTagBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyTagBudgetWhereInput
    orderBy?: MonthlyTagBudgetOrderByWithAggregationInput | MonthlyTagBudgetOrderByWithAggregationInput[]
    by: MonthlyTagBudgetScalarFieldEnum[] | MonthlyTagBudgetScalarFieldEnum
    having?: MonthlyTagBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyTagBudgetCountAggregateInputType | true
    _avg?: MonthlyTagBudgetAvgAggregateInputType
    _sum?: MonthlyTagBudgetSumAggregateInputType
    _min?: MonthlyTagBudgetMinAggregateInputType
    _max?: MonthlyTagBudgetMaxAggregateInputType
  }

  export type MonthlyTagBudgetGroupByOutputType = {
    id: string
    walletId: string
    tagId: string
    monthKey: string
    limitCents: number
    createdAt: Date
    updatedAt: Date
    _count: MonthlyTagBudgetCountAggregateOutputType | null
    _avg: MonthlyTagBudgetAvgAggregateOutputType | null
    _sum: MonthlyTagBudgetSumAggregateOutputType | null
    _min: MonthlyTagBudgetMinAggregateOutputType | null
    _max: MonthlyTagBudgetMaxAggregateOutputType | null
  }

  type GetMonthlyTagBudgetGroupByPayload<T extends MonthlyTagBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyTagBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyTagBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyTagBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyTagBudgetGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyTagBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    tagId?: boolean
    monthKey?: boolean
    limitCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyTagBudget"]>

  export type MonthlyTagBudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    tagId?: boolean
    monthKey?: boolean
    limitCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyTagBudget"]>

  export type MonthlyTagBudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    tagId?: boolean
    monthKey?: boolean
    limitCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyTagBudget"]>

  export type MonthlyTagBudgetSelectScalar = {
    id?: boolean
    walletId?: boolean
    tagId?: boolean
    monthKey?: boolean
    limitCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonthlyTagBudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "tagId" | "monthKey" | "limitCents" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyTagBudget"]>
  export type MonthlyTagBudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MonthlyTagBudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MonthlyTagBudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $MonthlyTagBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyTagBudget"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      tagId: string
      monthKey: string
      limitCents: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyTagBudget"]>
    composites: {}
  }

  type MonthlyTagBudgetGetPayload<S extends boolean | null | undefined | MonthlyTagBudgetDefaultArgs> = $Result.GetResult<Prisma.$MonthlyTagBudgetPayload, S>

  type MonthlyTagBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyTagBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyTagBudgetCountAggregateInputType | true
    }

  export interface MonthlyTagBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyTagBudget'], meta: { name: 'MonthlyTagBudget' } }
    /**
     * Find zero or one MonthlyTagBudget that matches the filter.
     * @param {MonthlyTagBudgetFindUniqueArgs} args - Arguments to find a MonthlyTagBudget
     * @example
     * // Get one MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyTagBudgetFindUniqueArgs>(args: SelectSubset<T, MonthlyTagBudgetFindUniqueArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyTagBudget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyTagBudgetFindUniqueOrThrowArgs} args - Arguments to find a MonthlyTagBudget
     * @example
     * // Get one MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyTagBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyTagBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyTagBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetFindFirstArgs} args - Arguments to find a MonthlyTagBudget
     * @example
     * // Get one MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyTagBudgetFindFirstArgs>(args?: SelectSubset<T, MonthlyTagBudgetFindFirstArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyTagBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetFindFirstOrThrowArgs} args - Arguments to find a MonthlyTagBudget
     * @example
     * // Get one MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyTagBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyTagBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyTagBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyTagBudgets
     * const monthlyTagBudgets = await prisma.monthlyTagBudget.findMany()
     * 
     * // Get first 10 MonthlyTagBudgets
     * const monthlyTagBudgets = await prisma.monthlyTagBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyTagBudgetWithIdOnly = await prisma.monthlyTagBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyTagBudgetFindManyArgs>(args?: SelectSubset<T, MonthlyTagBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyTagBudget.
     * @param {MonthlyTagBudgetCreateArgs} args - Arguments to create a MonthlyTagBudget.
     * @example
     * // Create one MonthlyTagBudget
     * const MonthlyTagBudget = await prisma.monthlyTagBudget.create({
     *   data: {
     *     // ... data to create a MonthlyTagBudget
     *   }
     * })
     * 
     */
    create<T extends MonthlyTagBudgetCreateArgs>(args: SelectSubset<T, MonthlyTagBudgetCreateArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyTagBudgets.
     * @param {MonthlyTagBudgetCreateManyArgs} args - Arguments to create many MonthlyTagBudgets.
     * @example
     * // Create many MonthlyTagBudgets
     * const monthlyTagBudget = await prisma.monthlyTagBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyTagBudgetCreateManyArgs>(args?: SelectSubset<T, MonthlyTagBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyTagBudgets and returns the data saved in the database.
     * @param {MonthlyTagBudgetCreateManyAndReturnArgs} args - Arguments to create many MonthlyTagBudgets.
     * @example
     * // Create many MonthlyTagBudgets
     * const monthlyTagBudget = await prisma.monthlyTagBudget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyTagBudgets and only return the `id`
     * const monthlyTagBudgetWithIdOnly = await prisma.monthlyTagBudget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyTagBudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyTagBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyTagBudget.
     * @param {MonthlyTagBudgetDeleteArgs} args - Arguments to delete one MonthlyTagBudget.
     * @example
     * // Delete one MonthlyTagBudget
     * const MonthlyTagBudget = await prisma.monthlyTagBudget.delete({
     *   where: {
     *     // ... filter to delete one MonthlyTagBudget
     *   }
     * })
     * 
     */
    delete<T extends MonthlyTagBudgetDeleteArgs>(args: SelectSubset<T, MonthlyTagBudgetDeleteArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyTagBudget.
     * @param {MonthlyTagBudgetUpdateArgs} args - Arguments to update one MonthlyTagBudget.
     * @example
     * // Update one MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyTagBudgetUpdateArgs>(args: SelectSubset<T, MonthlyTagBudgetUpdateArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyTagBudgets.
     * @param {MonthlyTagBudgetDeleteManyArgs} args - Arguments to filter MonthlyTagBudgets to delete.
     * @example
     * // Delete a few MonthlyTagBudgets
     * const { count } = await prisma.monthlyTagBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyTagBudgetDeleteManyArgs>(args?: SelectSubset<T, MonthlyTagBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyTagBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyTagBudgets
     * const monthlyTagBudget = await prisma.monthlyTagBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyTagBudgetUpdateManyArgs>(args: SelectSubset<T, MonthlyTagBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyTagBudgets and returns the data updated in the database.
     * @param {MonthlyTagBudgetUpdateManyAndReturnArgs} args - Arguments to update many MonthlyTagBudgets.
     * @example
     * // Update many MonthlyTagBudgets
     * const monthlyTagBudget = await prisma.monthlyTagBudget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyTagBudgets and only return the `id`
     * const monthlyTagBudgetWithIdOnly = await prisma.monthlyTagBudget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyTagBudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyTagBudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyTagBudget.
     * @param {MonthlyTagBudgetUpsertArgs} args - Arguments to update or create a MonthlyTagBudget.
     * @example
     * // Update or create a MonthlyTagBudget
     * const monthlyTagBudget = await prisma.monthlyTagBudget.upsert({
     *   create: {
     *     // ... data to create a MonthlyTagBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyTagBudget we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyTagBudgetUpsertArgs>(args: SelectSubset<T, MonthlyTagBudgetUpsertArgs<ExtArgs>>): Prisma__MonthlyTagBudgetClient<$Result.GetResult<Prisma.$MonthlyTagBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyTagBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetCountArgs} args - Arguments to filter MonthlyTagBudgets to count.
     * @example
     * // Count the number of MonthlyTagBudgets
     * const count = await prisma.monthlyTagBudget.count({
     *   where: {
     *     // ... the filter for the MonthlyTagBudgets we want to count
     *   }
     * })
    **/
    count<T extends MonthlyTagBudgetCountArgs>(
      args?: Subset<T, MonthlyTagBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyTagBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyTagBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyTagBudgetAggregateArgs>(args: Subset<T, MonthlyTagBudgetAggregateArgs>): Prisma.PrismaPromise<GetMonthlyTagBudgetAggregateType<T>>

    /**
     * Group by MonthlyTagBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyTagBudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyTagBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyTagBudgetGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyTagBudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyTagBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyTagBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyTagBudget model
   */
  readonly fields: MonthlyTagBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyTagBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyTagBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyTagBudget model
   */
  interface MonthlyTagBudgetFieldRefs {
    readonly id: FieldRef<"MonthlyTagBudget", 'String'>
    readonly walletId: FieldRef<"MonthlyTagBudget", 'String'>
    readonly tagId: FieldRef<"MonthlyTagBudget", 'String'>
    readonly monthKey: FieldRef<"MonthlyTagBudget", 'String'>
    readonly limitCents: FieldRef<"MonthlyTagBudget", 'Int'>
    readonly createdAt: FieldRef<"MonthlyTagBudget", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyTagBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyTagBudget findUnique
   */
  export type MonthlyTagBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyTagBudget to fetch.
     */
    where: MonthlyTagBudgetWhereUniqueInput
  }

  /**
   * MonthlyTagBudget findUniqueOrThrow
   */
  export type MonthlyTagBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyTagBudget to fetch.
     */
    where: MonthlyTagBudgetWhereUniqueInput
  }

  /**
   * MonthlyTagBudget findFirst
   */
  export type MonthlyTagBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyTagBudget to fetch.
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyTagBudgets to fetch.
     */
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyTagBudgets.
     */
    cursor?: MonthlyTagBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyTagBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyTagBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyTagBudgets.
     */
    distinct?: MonthlyTagBudgetScalarFieldEnum | MonthlyTagBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyTagBudget findFirstOrThrow
   */
  export type MonthlyTagBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyTagBudget to fetch.
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyTagBudgets to fetch.
     */
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyTagBudgets.
     */
    cursor?: MonthlyTagBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyTagBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyTagBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyTagBudgets.
     */
    distinct?: MonthlyTagBudgetScalarFieldEnum | MonthlyTagBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyTagBudget findMany
   */
  export type MonthlyTagBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyTagBudgets to fetch.
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyTagBudgets to fetch.
     */
    orderBy?: MonthlyTagBudgetOrderByWithRelationInput | MonthlyTagBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyTagBudgets.
     */
    cursor?: MonthlyTagBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyTagBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyTagBudgets.
     */
    skip?: number
    distinct?: MonthlyTagBudgetScalarFieldEnum | MonthlyTagBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyTagBudget create
   */
  export type MonthlyTagBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyTagBudget.
     */
    data: XOR<MonthlyTagBudgetCreateInput, MonthlyTagBudgetUncheckedCreateInput>
  }

  /**
   * MonthlyTagBudget createMany
   */
  export type MonthlyTagBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyTagBudgets.
     */
    data: MonthlyTagBudgetCreateManyInput | MonthlyTagBudgetCreateManyInput[]
  }

  /**
   * MonthlyTagBudget createManyAndReturn
   */
  export type MonthlyTagBudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyTagBudgets.
     */
    data: MonthlyTagBudgetCreateManyInput | MonthlyTagBudgetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyTagBudget update
   */
  export type MonthlyTagBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyTagBudget.
     */
    data: XOR<MonthlyTagBudgetUpdateInput, MonthlyTagBudgetUncheckedUpdateInput>
    /**
     * Choose, which MonthlyTagBudget to update.
     */
    where: MonthlyTagBudgetWhereUniqueInput
  }

  /**
   * MonthlyTagBudget updateMany
   */
  export type MonthlyTagBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyTagBudgets.
     */
    data: XOR<MonthlyTagBudgetUpdateManyMutationInput, MonthlyTagBudgetUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyTagBudgets to update
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * Limit how many MonthlyTagBudgets to update.
     */
    limit?: number
  }

  /**
   * MonthlyTagBudget updateManyAndReturn
   */
  export type MonthlyTagBudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyTagBudgets.
     */
    data: XOR<MonthlyTagBudgetUpdateManyMutationInput, MonthlyTagBudgetUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyTagBudgets to update
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * Limit how many MonthlyTagBudgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyTagBudget upsert
   */
  export type MonthlyTagBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyTagBudget to update in case it exists.
     */
    where: MonthlyTagBudgetWhereUniqueInput
    /**
     * In case the MonthlyTagBudget found by the `where` argument doesn't exist, create a new MonthlyTagBudget with this data.
     */
    create: XOR<MonthlyTagBudgetCreateInput, MonthlyTagBudgetUncheckedCreateInput>
    /**
     * In case the MonthlyTagBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyTagBudgetUpdateInput, MonthlyTagBudgetUncheckedUpdateInput>
  }

  /**
   * MonthlyTagBudget delete
   */
  export type MonthlyTagBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
    /**
     * Filter which MonthlyTagBudget to delete.
     */
    where: MonthlyTagBudgetWhereUniqueInput
  }

  /**
   * MonthlyTagBudget deleteMany
   */
  export type MonthlyTagBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyTagBudgets to delete
     */
    where?: MonthlyTagBudgetWhereInput
    /**
     * Limit how many MonthlyTagBudgets to delete.
     */
    limit?: number
  }

  /**
   * MonthlyTagBudget without action
   */
  export type MonthlyTagBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyTagBudget
     */
    select?: MonthlyTagBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyTagBudget
     */
    omit?: MonthlyTagBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyTagBudgetInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    amountCents: number | null
    intervalValue: number | null
    installments: number | null
  }

  export type PlanSumAggregateOutputType = {
    amountCents: number | null
    intervalValue: number | null
    installments: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    categoryId: string | null
    type: $Enums.PlanType | null
    transactionType: $Enums.TransactionType | null
    description: string | null
    amountCents: number | null
    startDate: Date | null
    endDate: Date | null
    intervalValue: number | null
    recurrenceUnit: $Enums.RecurrenceUnit | null
    installments: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    categoryId: string | null
    type: $Enums.PlanType | null
    transactionType: $Enums.TransactionType | null
    description: string | null
    amountCents: number | null
    startDate: Date | null
    endDate: Date | null
    intervalValue: number | null
    recurrenceUnit: $Enums.RecurrenceUnit | null
    installments: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    walletId: number
    categoryId: number
    type: number
    transactionType: number
    description: number
    amountCents: number
    startDate: number
    endDate: number
    intervalValue: number
    recurrenceUnit: number
    installments: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    amountCents?: true
    intervalValue?: true
    installments?: true
  }

  export type PlanSumAggregateInputType = {
    amountCents?: true
    intervalValue?: true
    installments?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    transactionType?: true
    description?: true
    amountCents?: true
    startDate?: true
    endDate?: true
    intervalValue?: true
    recurrenceUnit?: true
    installments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    transactionType?: true
    description?: true
    amountCents?: true
    startDate?: true
    endDate?: true
    intervalValue?: true
    recurrenceUnit?: true
    installments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    walletId?: true
    categoryId?: true
    type?: true
    transactionType?: true
    description?: true
    amountCents?: true
    startDate?: true
    endDate?: true
    intervalValue?: true
    recurrenceUnit?: true
    installments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    walletId: string
    categoryId: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description: string | null
    amountCents: number
    startDate: Date
    endDate: Date | null
    intervalValue: number
    recurrenceUnit: $Enums.RecurrenceUnit | null
    installments: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    transactionType?: boolean
    description?: boolean
    amountCents?: boolean
    startDate?: boolean
    endDate?: boolean
    intervalValue?: boolean
    recurrenceUnit?: boolean
    installments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
    occurrences?: boolean | Plan$occurrencesArgs<ExtArgs>
    transactions?: boolean | Plan$transactionsArgs<ExtArgs>
    tags?: boolean | Plan$tagsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    transactionType?: boolean
    description?: boolean
    amountCents?: boolean
    startDate?: boolean
    endDate?: boolean
    intervalValue?: boolean
    recurrenceUnit?: boolean
    installments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    transactionType?: boolean
    description?: boolean
    amountCents?: boolean
    startDate?: boolean
    endDate?: boolean
    intervalValue?: boolean
    recurrenceUnit?: boolean
    installments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    walletId?: boolean
    categoryId?: boolean
    type?: boolean
    transactionType?: boolean
    description?: boolean
    amountCents?: boolean
    startDate?: boolean
    endDate?: boolean
    intervalValue?: boolean
    recurrenceUnit?: boolean
    installments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "categoryId" | "type" | "transactionType" | "description" | "amountCents" | "startDate" | "endDate" | "intervalValue" | "recurrenceUnit" | "installments" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
    occurrences?: boolean | Plan$occurrencesArgs<ExtArgs>
    transactions?: boolean | Plan$transactionsArgs<ExtArgs>
    tags?: boolean | Plan$tagsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    category?: boolean | Plan$categoryArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      occurrences: Prisma.$PlanOccurrencePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      tags: Prisma.$PlanTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      categoryId: string | null
      type: $Enums.PlanType
      transactionType: $Enums.TransactionType
      description: string | null
      amountCents: number
      startDate: Date
      endDate: Date | null
      intervalValue: number
      recurrenceUnit: $Enums.RecurrenceUnit | null
      installments: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Plan$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Plan$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    occurrences<T extends Plan$occurrencesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$occurrencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Plan$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Plan$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly walletId: FieldRef<"Plan", 'String'>
    readonly categoryId: FieldRef<"Plan", 'String'>
    readonly type: FieldRef<"Plan", 'PlanType'>
    readonly transactionType: FieldRef<"Plan", 'TransactionType'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly amountCents: FieldRef<"Plan", 'Int'>
    readonly startDate: FieldRef<"Plan", 'DateTime'>
    readonly endDate: FieldRef<"Plan", 'DateTime'>
    readonly intervalValue: FieldRef<"Plan", 'Int'>
    readonly recurrenceUnit: FieldRef<"Plan", 'RecurrenceUnit'>
    readonly installments: FieldRef<"Plan", 'Int'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.category
   */
  export type Plan$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Plan.occurrences
   */
  export type Plan$occurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    where?: PlanOccurrenceWhereInput
    orderBy?: PlanOccurrenceOrderByWithRelationInput | PlanOccurrenceOrderByWithRelationInput[]
    cursor?: PlanOccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanOccurrenceScalarFieldEnum | PlanOccurrenceScalarFieldEnum[]
  }

  /**
   * Plan.transactions
   */
  export type Plan$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Plan.tags
   */
  export type Plan$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    cursor?: PlanTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model PlanTag
   */

  export type AggregatePlanTag = {
    _count: PlanTagCountAggregateOutputType | null
    _min: PlanTagMinAggregateOutputType | null
    _max: PlanTagMaxAggregateOutputType | null
  }

  export type PlanTagMinAggregateOutputType = {
    planId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type PlanTagMaxAggregateOutputType = {
    planId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type PlanTagCountAggregateOutputType = {
    planId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type PlanTagMinAggregateInputType = {
    planId?: true
    tagId?: true
    createdAt?: true
  }

  export type PlanTagMaxAggregateInputType = {
    planId?: true
    tagId?: true
    createdAt?: true
  }

  export type PlanTagCountAggregateInputType = {
    planId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type PlanTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTag to aggregate.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanTags
    **/
    _count?: true | PlanTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanTagMaxAggregateInputType
  }

  export type GetPlanTagAggregateType<T extends PlanTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanTag[P]>
      : GetScalarType<T[P], AggregatePlanTag[P]>
  }




  export type PlanTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTagWhereInput
    orderBy?: PlanTagOrderByWithAggregationInput | PlanTagOrderByWithAggregationInput[]
    by: PlanTagScalarFieldEnum[] | PlanTagScalarFieldEnum
    having?: PlanTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanTagCountAggregateInputType | true
    _min?: PlanTagMinAggregateInputType
    _max?: PlanTagMaxAggregateInputType
  }

  export type PlanTagGroupByOutputType = {
    planId: string
    tagId: string
    createdAt: Date
    _count: PlanTagCountAggregateOutputType | null
    _min: PlanTagMinAggregateOutputType | null
    _max: PlanTagMaxAggregateOutputType | null
  }

  type GetPlanTagGroupByPayload<T extends PlanTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanTagGroupByOutputType[P]>
            : GetScalarType<T[P], PlanTagGroupByOutputType[P]>
        }
      >
    >


  export type PlanTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    createdAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    createdAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    tagId?: boolean
    createdAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planTag"]>

  export type PlanTagSelectScalar = {
    planId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type PlanTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"planId" | "tagId" | "createdAt", ExtArgs["result"]["planTag"]>
  export type PlanTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PlanTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PlanTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PlanTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanTag"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      planId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["planTag"]>
    composites: {}
  }

  type PlanTagGetPayload<S extends boolean | null | undefined | PlanTagDefaultArgs> = $Result.GetResult<Prisma.$PlanTagPayload, S>

  type PlanTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanTagCountAggregateInputType | true
    }

  export interface PlanTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanTag'], meta: { name: 'PlanTag' } }
    /**
     * Find zero or one PlanTag that matches the filter.
     * @param {PlanTagFindUniqueArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanTagFindUniqueArgs>(args: SelectSubset<T, PlanTagFindUniqueArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanTagFindUniqueOrThrowArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindFirstArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanTagFindFirstArgs>(args?: SelectSubset<T, PlanTagFindFirstArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindFirstOrThrowArgs} args - Arguments to find a PlanTag
     * @example
     * // Get one PlanTag
     * const planTag = await prisma.planTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanTags
     * const planTags = await prisma.planTag.findMany()
     * 
     * // Get first 10 PlanTags
     * const planTags = await prisma.planTag.findMany({ take: 10 })
     * 
     * // Only select the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.findMany({ select: { planId: true } })
     * 
     */
    findMany<T extends PlanTagFindManyArgs>(args?: SelectSubset<T, PlanTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanTag.
     * @param {PlanTagCreateArgs} args - Arguments to create a PlanTag.
     * @example
     * // Create one PlanTag
     * const PlanTag = await prisma.planTag.create({
     *   data: {
     *     // ... data to create a PlanTag
     *   }
     * })
     * 
     */
    create<T extends PlanTagCreateArgs>(args: SelectSubset<T, PlanTagCreateArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanTags.
     * @param {PlanTagCreateManyArgs} args - Arguments to create many PlanTags.
     * @example
     * // Create many PlanTags
     * const planTag = await prisma.planTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanTagCreateManyArgs>(args?: SelectSubset<T, PlanTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanTags and returns the data saved in the database.
     * @param {PlanTagCreateManyAndReturnArgs} args - Arguments to create many PlanTags.
     * @example
     * // Create many PlanTags
     * const planTag = await prisma.planTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanTags and only return the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.createManyAndReturn({
     *   select: { planId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanTag.
     * @param {PlanTagDeleteArgs} args - Arguments to delete one PlanTag.
     * @example
     * // Delete one PlanTag
     * const PlanTag = await prisma.planTag.delete({
     *   where: {
     *     // ... filter to delete one PlanTag
     *   }
     * })
     * 
     */
    delete<T extends PlanTagDeleteArgs>(args: SelectSubset<T, PlanTagDeleteArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanTag.
     * @param {PlanTagUpdateArgs} args - Arguments to update one PlanTag.
     * @example
     * // Update one PlanTag
     * const planTag = await prisma.planTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanTagUpdateArgs>(args: SelectSubset<T, PlanTagUpdateArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanTags.
     * @param {PlanTagDeleteManyArgs} args - Arguments to filter PlanTags to delete.
     * @example
     * // Delete a few PlanTags
     * const { count } = await prisma.planTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanTagDeleteManyArgs>(args?: SelectSubset<T, PlanTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanTags
     * const planTag = await prisma.planTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanTagUpdateManyArgs>(args: SelectSubset<T, PlanTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTags and returns the data updated in the database.
     * @param {PlanTagUpdateManyAndReturnArgs} args - Arguments to update many PlanTags.
     * @example
     * // Update many PlanTags
     * const planTag = await prisma.planTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanTags and only return the `planId`
     * const planTagWithPlanIdOnly = await prisma.planTag.updateManyAndReturn({
     *   select: { planId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanTag.
     * @param {PlanTagUpsertArgs} args - Arguments to update or create a PlanTag.
     * @example
     * // Update or create a PlanTag
     * const planTag = await prisma.planTag.upsert({
     *   create: {
     *     // ... data to create a PlanTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanTag we want to update
     *   }
     * })
     */
    upsert<T extends PlanTagUpsertArgs>(args: SelectSubset<T, PlanTagUpsertArgs<ExtArgs>>): Prisma__PlanTagClient<$Result.GetResult<Prisma.$PlanTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagCountArgs} args - Arguments to filter PlanTags to count.
     * @example
     * // Count the number of PlanTags
     * const count = await prisma.planTag.count({
     *   where: {
     *     // ... the filter for the PlanTags we want to count
     *   }
     * })
    **/
    count<T extends PlanTagCountArgs>(
      args?: Subset<T, PlanTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanTagAggregateArgs>(args: Subset<T, PlanTagAggregateArgs>): Prisma.PrismaPromise<GetPlanTagAggregateType<T>>

    /**
     * Group by PlanTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanTagGroupByArgs['orderBy'] }
        : { orderBy?: PlanTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanTag model
   */
  readonly fields: PlanTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanTag model
   */
  interface PlanTagFieldRefs {
    readonly planId: FieldRef<"PlanTag", 'String'>
    readonly tagId: FieldRef<"PlanTag", 'String'>
    readonly createdAt: FieldRef<"PlanTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanTag findUnique
   */
  export type PlanTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag findUniqueOrThrow
   */
  export type PlanTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag findFirst
   */
  export type PlanTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTags.
     */
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag findFirstOrThrow
   */
  export type PlanTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTag to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTags.
     */
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag findMany
   */
  export type PlanTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter, which PlanTags to fetch.
     */
    where?: PlanTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTags to fetch.
     */
    orderBy?: PlanTagOrderByWithRelationInput | PlanTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanTags.
     */
    cursor?: PlanTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTags.
     */
    skip?: number
    distinct?: PlanTagScalarFieldEnum | PlanTagScalarFieldEnum[]
  }

  /**
   * PlanTag create
   */
  export type PlanTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanTag.
     */
    data: XOR<PlanTagCreateInput, PlanTagUncheckedCreateInput>
  }

  /**
   * PlanTag createMany
   */
  export type PlanTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanTags.
     */
    data: PlanTagCreateManyInput | PlanTagCreateManyInput[]
  }

  /**
   * PlanTag createManyAndReturn
   */
  export type PlanTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * The data used to create many PlanTags.
     */
    data: PlanTagCreateManyInput | PlanTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanTag update
   */
  export type PlanTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanTag.
     */
    data: XOR<PlanTagUpdateInput, PlanTagUncheckedUpdateInput>
    /**
     * Choose, which PlanTag to update.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag updateMany
   */
  export type PlanTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanTags.
     */
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyInput>
    /**
     * Filter which PlanTags to update
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to update.
     */
    limit?: number
  }

  /**
   * PlanTag updateManyAndReturn
   */
  export type PlanTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * The data used to update PlanTags.
     */
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyInput>
    /**
     * Filter which PlanTags to update
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanTag upsert
   */
  export type PlanTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanTag to update in case it exists.
     */
    where: PlanTagWhereUniqueInput
    /**
     * In case the PlanTag found by the `where` argument doesn't exist, create a new PlanTag with this data.
     */
    create: XOR<PlanTagCreateInput, PlanTagUncheckedCreateInput>
    /**
     * In case the PlanTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanTagUpdateInput, PlanTagUncheckedUpdateInput>
  }

  /**
   * PlanTag delete
   */
  export type PlanTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
    /**
     * Filter which PlanTag to delete.
     */
    where: PlanTagWhereUniqueInput
  }

  /**
   * PlanTag deleteMany
   */
  export type PlanTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTags to delete
     */
    where?: PlanTagWhereInput
    /**
     * Limit how many PlanTags to delete.
     */
    limit?: number
  }

  /**
   * PlanTag without action
   */
  export type PlanTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTag
     */
    select?: PlanTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTag
     */
    omit?: PlanTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanTagInclude<ExtArgs> | null
  }


  /**
   * Model PlanOccurrence
   */

  export type AggregatePlanOccurrence = {
    _count: PlanOccurrenceCountAggregateOutputType | null
    _avg: PlanOccurrenceAvgAggregateOutputType | null
    _sum: PlanOccurrenceSumAggregateOutputType | null
    _min: PlanOccurrenceMinAggregateOutputType | null
    _max: PlanOccurrenceMaxAggregateOutputType | null
  }

  export type PlanOccurrenceAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type PlanOccurrenceSumAggregateOutputType = {
    amountCents: number | null
  }

  export type PlanOccurrenceMinAggregateOutputType = {
    id: string | null
    planId: string | null
    dueDate: Date | null
    amountCents: number | null
    isGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanOccurrenceMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    dueDate: Date | null
    amountCents: number | null
    isGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanOccurrenceCountAggregateOutputType = {
    id: number
    planId: number
    dueDate: number
    amountCents: number
    isGenerated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanOccurrenceAvgAggregateInputType = {
    amountCents?: true
  }

  export type PlanOccurrenceSumAggregateInputType = {
    amountCents?: true
  }

  export type PlanOccurrenceMinAggregateInputType = {
    id?: true
    planId?: true
    dueDate?: true
    amountCents?: true
    isGenerated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanOccurrenceMaxAggregateInputType = {
    id?: true
    planId?: true
    dueDate?: true
    amountCents?: true
    isGenerated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanOccurrenceCountAggregateInputType = {
    id?: true
    planId?: true
    dueDate?: true
    amountCents?: true
    isGenerated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanOccurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanOccurrence to aggregate.
     */
    where?: PlanOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanOccurrences to fetch.
     */
    orderBy?: PlanOccurrenceOrderByWithRelationInput | PlanOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanOccurrences
    **/
    _count?: true | PlanOccurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanOccurrenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanOccurrenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanOccurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanOccurrenceMaxAggregateInputType
  }

  export type GetPlanOccurrenceAggregateType<T extends PlanOccurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanOccurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanOccurrence[P]>
      : GetScalarType<T[P], AggregatePlanOccurrence[P]>
  }




  export type PlanOccurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanOccurrenceWhereInput
    orderBy?: PlanOccurrenceOrderByWithAggregationInput | PlanOccurrenceOrderByWithAggregationInput[]
    by: PlanOccurrenceScalarFieldEnum[] | PlanOccurrenceScalarFieldEnum
    having?: PlanOccurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanOccurrenceCountAggregateInputType | true
    _avg?: PlanOccurrenceAvgAggregateInputType
    _sum?: PlanOccurrenceSumAggregateInputType
    _min?: PlanOccurrenceMinAggregateInputType
    _max?: PlanOccurrenceMaxAggregateInputType
  }

  export type PlanOccurrenceGroupByOutputType = {
    id: string
    planId: string
    dueDate: Date
    amountCents: number
    isGenerated: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlanOccurrenceCountAggregateOutputType | null
    _avg: PlanOccurrenceAvgAggregateOutputType | null
    _sum: PlanOccurrenceSumAggregateOutputType | null
    _min: PlanOccurrenceMinAggregateOutputType | null
    _max: PlanOccurrenceMaxAggregateOutputType | null
  }

  type GetPlanOccurrenceGroupByPayload<T extends PlanOccurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanOccurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanOccurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanOccurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], PlanOccurrenceGroupByOutputType[P]>
        }
      >
    >


  export type PlanOccurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    dueDate?: boolean
    amountCents?: boolean
    isGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planOccurrence"]>

  export type PlanOccurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    dueDate?: boolean
    amountCents?: boolean
    isGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planOccurrence"]>

  export type PlanOccurrenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    dueDate?: boolean
    amountCents?: boolean
    isGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planOccurrence"]>

  export type PlanOccurrenceSelectScalar = {
    id?: boolean
    planId?: boolean
    dueDate?: boolean
    amountCents?: boolean
    isGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOccurrenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "dueDate" | "amountCents" | "isGenerated" | "createdAt" | "updatedAt", ExtArgs["result"]["planOccurrence"]>
  export type PlanOccurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PlanOccurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PlanOccurrenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PlanOccurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanOccurrence"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      dueDate: Date
      amountCents: number
      isGenerated: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planOccurrence"]>
    composites: {}
  }

  type PlanOccurrenceGetPayload<S extends boolean | null | undefined | PlanOccurrenceDefaultArgs> = $Result.GetResult<Prisma.$PlanOccurrencePayload, S>

  type PlanOccurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanOccurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanOccurrenceCountAggregateInputType | true
    }

  export interface PlanOccurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanOccurrence'], meta: { name: 'PlanOccurrence' } }
    /**
     * Find zero or one PlanOccurrence that matches the filter.
     * @param {PlanOccurrenceFindUniqueArgs} args - Arguments to find a PlanOccurrence
     * @example
     * // Get one PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanOccurrenceFindUniqueArgs>(args: SelectSubset<T, PlanOccurrenceFindUniqueArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanOccurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanOccurrenceFindUniqueOrThrowArgs} args - Arguments to find a PlanOccurrence
     * @example
     * // Get one PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanOccurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanOccurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanOccurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceFindFirstArgs} args - Arguments to find a PlanOccurrence
     * @example
     * // Get one PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanOccurrenceFindFirstArgs>(args?: SelectSubset<T, PlanOccurrenceFindFirstArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanOccurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceFindFirstOrThrowArgs} args - Arguments to find a PlanOccurrence
     * @example
     * // Get one PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanOccurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanOccurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanOccurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanOccurrences
     * const planOccurrences = await prisma.planOccurrence.findMany()
     * 
     * // Get first 10 PlanOccurrences
     * const planOccurrences = await prisma.planOccurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planOccurrenceWithIdOnly = await prisma.planOccurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanOccurrenceFindManyArgs>(args?: SelectSubset<T, PlanOccurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanOccurrence.
     * @param {PlanOccurrenceCreateArgs} args - Arguments to create a PlanOccurrence.
     * @example
     * // Create one PlanOccurrence
     * const PlanOccurrence = await prisma.planOccurrence.create({
     *   data: {
     *     // ... data to create a PlanOccurrence
     *   }
     * })
     * 
     */
    create<T extends PlanOccurrenceCreateArgs>(args: SelectSubset<T, PlanOccurrenceCreateArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanOccurrences.
     * @param {PlanOccurrenceCreateManyArgs} args - Arguments to create many PlanOccurrences.
     * @example
     * // Create many PlanOccurrences
     * const planOccurrence = await prisma.planOccurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanOccurrenceCreateManyArgs>(args?: SelectSubset<T, PlanOccurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanOccurrences and returns the data saved in the database.
     * @param {PlanOccurrenceCreateManyAndReturnArgs} args - Arguments to create many PlanOccurrences.
     * @example
     * // Create many PlanOccurrences
     * const planOccurrence = await prisma.planOccurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanOccurrences and only return the `id`
     * const planOccurrenceWithIdOnly = await prisma.planOccurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanOccurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanOccurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanOccurrence.
     * @param {PlanOccurrenceDeleteArgs} args - Arguments to delete one PlanOccurrence.
     * @example
     * // Delete one PlanOccurrence
     * const PlanOccurrence = await prisma.planOccurrence.delete({
     *   where: {
     *     // ... filter to delete one PlanOccurrence
     *   }
     * })
     * 
     */
    delete<T extends PlanOccurrenceDeleteArgs>(args: SelectSubset<T, PlanOccurrenceDeleteArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanOccurrence.
     * @param {PlanOccurrenceUpdateArgs} args - Arguments to update one PlanOccurrence.
     * @example
     * // Update one PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanOccurrenceUpdateArgs>(args: SelectSubset<T, PlanOccurrenceUpdateArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanOccurrences.
     * @param {PlanOccurrenceDeleteManyArgs} args - Arguments to filter PlanOccurrences to delete.
     * @example
     * // Delete a few PlanOccurrences
     * const { count } = await prisma.planOccurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanOccurrenceDeleteManyArgs>(args?: SelectSubset<T, PlanOccurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanOccurrences
     * const planOccurrence = await prisma.planOccurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanOccurrenceUpdateManyArgs>(args: SelectSubset<T, PlanOccurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanOccurrences and returns the data updated in the database.
     * @param {PlanOccurrenceUpdateManyAndReturnArgs} args - Arguments to update many PlanOccurrences.
     * @example
     * // Update many PlanOccurrences
     * const planOccurrence = await prisma.planOccurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanOccurrences and only return the `id`
     * const planOccurrenceWithIdOnly = await prisma.planOccurrence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanOccurrenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanOccurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanOccurrence.
     * @param {PlanOccurrenceUpsertArgs} args - Arguments to update or create a PlanOccurrence.
     * @example
     * // Update or create a PlanOccurrence
     * const planOccurrence = await prisma.planOccurrence.upsert({
     *   create: {
     *     // ... data to create a PlanOccurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanOccurrence we want to update
     *   }
     * })
     */
    upsert<T extends PlanOccurrenceUpsertArgs>(args: SelectSubset<T, PlanOccurrenceUpsertArgs<ExtArgs>>): Prisma__PlanOccurrenceClient<$Result.GetResult<Prisma.$PlanOccurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceCountArgs} args - Arguments to filter PlanOccurrences to count.
     * @example
     * // Count the number of PlanOccurrences
     * const count = await prisma.planOccurrence.count({
     *   where: {
     *     // ... the filter for the PlanOccurrences we want to count
     *   }
     * })
    **/
    count<T extends PlanOccurrenceCountArgs>(
      args?: Subset<T, PlanOccurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanOccurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanOccurrenceAggregateArgs>(args: Subset<T, PlanOccurrenceAggregateArgs>): Prisma.PrismaPromise<GetPlanOccurrenceAggregateType<T>>

    /**
     * Group by PlanOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanOccurrenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanOccurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanOccurrenceGroupByArgs['orderBy'] }
        : { orderBy?: PlanOccurrenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanOccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanOccurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanOccurrence model
   */
  readonly fields: PlanOccurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanOccurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanOccurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanOccurrence model
   */
  interface PlanOccurrenceFieldRefs {
    readonly id: FieldRef<"PlanOccurrence", 'String'>
    readonly planId: FieldRef<"PlanOccurrence", 'String'>
    readonly dueDate: FieldRef<"PlanOccurrence", 'DateTime'>
    readonly amountCents: FieldRef<"PlanOccurrence", 'Int'>
    readonly isGenerated: FieldRef<"PlanOccurrence", 'Boolean'>
    readonly createdAt: FieldRef<"PlanOccurrence", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanOccurrence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanOccurrence findUnique
   */
  export type PlanOccurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which PlanOccurrence to fetch.
     */
    where: PlanOccurrenceWhereUniqueInput
  }

  /**
   * PlanOccurrence findUniqueOrThrow
   */
  export type PlanOccurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which PlanOccurrence to fetch.
     */
    where: PlanOccurrenceWhereUniqueInput
  }

  /**
   * PlanOccurrence findFirst
   */
  export type PlanOccurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which PlanOccurrence to fetch.
     */
    where?: PlanOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanOccurrences to fetch.
     */
    orderBy?: PlanOccurrenceOrderByWithRelationInput | PlanOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanOccurrences.
     */
    cursor?: PlanOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanOccurrences.
     */
    distinct?: PlanOccurrenceScalarFieldEnum | PlanOccurrenceScalarFieldEnum[]
  }

  /**
   * PlanOccurrence findFirstOrThrow
   */
  export type PlanOccurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which PlanOccurrence to fetch.
     */
    where?: PlanOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanOccurrences to fetch.
     */
    orderBy?: PlanOccurrenceOrderByWithRelationInput | PlanOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanOccurrences.
     */
    cursor?: PlanOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanOccurrences.
     */
    distinct?: PlanOccurrenceScalarFieldEnum | PlanOccurrenceScalarFieldEnum[]
  }

  /**
   * PlanOccurrence findMany
   */
  export type PlanOccurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which PlanOccurrences to fetch.
     */
    where?: PlanOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanOccurrences to fetch.
     */
    orderBy?: PlanOccurrenceOrderByWithRelationInput | PlanOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanOccurrences.
     */
    cursor?: PlanOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanOccurrences.
     */
    skip?: number
    distinct?: PlanOccurrenceScalarFieldEnum | PlanOccurrenceScalarFieldEnum[]
  }

  /**
   * PlanOccurrence create
   */
  export type PlanOccurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanOccurrence.
     */
    data: XOR<PlanOccurrenceCreateInput, PlanOccurrenceUncheckedCreateInput>
  }

  /**
   * PlanOccurrence createMany
   */
  export type PlanOccurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanOccurrences.
     */
    data: PlanOccurrenceCreateManyInput | PlanOccurrenceCreateManyInput[]
  }

  /**
   * PlanOccurrence createManyAndReturn
   */
  export type PlanOccurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * The data used to create many PlanOccurrences.
     */
    data: PlanOccurrenceCreateManyInput | PlanOccurrenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanOccurrence update
   */
  export type PlanOccurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanOccurrence.
     */
    data: XOR<PlanOccurrenceUpdateInput, PlanOccurrenceUncheckedUpdateInput>
    /**
     * Choose, which PlanOccurrence to update.
     */
    where: PlanOccurrenceWhereUniqueInput
  }

  /**
   * PlanOccurrence updateMany
   */
  export type PlanOccurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanOccurrences.
     */
    data: XOR<PlanOccurrenceUpdateManyMutationInput, PlanOccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which PlanOccurrences to update
     */
    where?: PlanOccurrenceWhereInput
    /**
     * Limit how many PlanOccurrences to update.
     */
    limit?: number
  }

  /**
   * PlanOccurrence updateManyAndReturn
   */
  export type PlanOccurrenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * The data used to update PlanOccurrences.
     */
    data: XOR<PlanOccurrenceUpdateManyMutationInput, PlanOccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which PlanOccurrences to update
     */
    where?: PlanOccurrenceWhereInput
    /**
     * Limit how many PlanOccurrences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanOccurrence upsert
   */
  export type PlanOccurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanOccurrence to update in case it exists.
     */
    where: PlanOccurrenceWhereUniqueInput
    /**
     * In case the PlanOccurrence found by the `where` argument doesn't exist, create a new PlanOccurrence with this data.
     */
    create: XOR<PlanOccurrenceCreateInput, PlanOccurrenceUncheckedCreateInput>
    /**
     * In case the PlanOccurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanOccurrenceUpdateInput, PlanOccurrenceUncheckedUpdateInput>
  }

  /**
   * PlanOccurrence delete
   */
  export type PlanOccurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
    /**
     * Filter which PlanOccurrence to delete.
     */
    where: PlanOccurrenceWhereUniqueInput
  }

  /**
   * PlanOccurrence deleteMany
   */
  export type PlanOccurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanOccurrences to delete
     */
    where?: PlanOccurrenceWhereInput
    /**
     * Limit how many PlanOccurrences to delete.
     */
    limit?: number
  }

  /**
   * PlanOccurrence without action
   */
  export type PlanOccurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanOccurrence
     */
    select?: PlanOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanOccurrence
     */
    omit?: PlanOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanOccurrenceInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetCents: number | null
    initialAmountCents: number | null
    participantCount: number | null
  }

  export type GoalSumAggregateOutputType = {
    targetCents: number | null
    initialAmountCents: number | null
    participantCount: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    name: string | null
    targetCents: number | null
    initialAmountCents: number | null
    participantCount: number | null
    targetDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    name: string | null
    targetCents: number | null
    initialAmountCents: number | null
    participantCount: number | null
    targetDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    walletId: number
    name: number
    targetCents: number
    initialAmountCents: number
    participantCount: number
    targetDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetCents?: true
    initialAmountCents?: true
    participantCount?: true
  }

  export type GoalSumAggregateInputType = {
    targetCents?: true
    initialAmountCents?: true
    participantCount?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    targetCents?: true
    initialAmountCents?: true
    participantCount?: true
    targetDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    targetCents?: true
    initialAmountCents?: true
    participantCount?: true
    targetDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    walletId?: true
    name?: true
    targetCents?: true
    initialAmountCents?: true
    participantCount?: true
    targetDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    walletId: string
    name: string
    targetCents: number
    initialAmountCents: number
    participantCount: number
    targetDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    targetCents?: boolean
    initialAmountCents?: boolean
    participantCount?: boolean
    targetDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    allocations?: boolean | Goal$allocationsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    targetCents?: boolean
    initialAmountCents?: boolean
    participantCount?: boolean
    targetDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    name?: boolean
    targetCents?: boolean
    initialAmountCents?: boolean
    participantCount?: boolean
    targetDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    walletId?: boolean
    name?: boolean
    targetCents?: boolean
    initialAmountCents?: boolean
    participantCount?: boolean
    targetDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "name" | "targetCents" | "initialAmountCents" | "participantCount" | "targetDate" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    allocations?: boolean | Goal$allocationsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      allocations: Prisma.$GoalAllocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      name: string
      targetCents: number
      initialAmountCents: number
      participantCount: number
      targetDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    allocations<T extends Goal$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly walletId: FieldRef<"Goal", 'String'>
    readonly name: FieldRef<"Goal", 'String'>
    readonly targetCents: FieldRef<"Goal", 'Int'>
    readonly initialAmountCents: FieldRef<"Goal", 'Int'>
    readonly participantCount: FieldRef<"Goal", 'Int'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.allocations
   */
  export type Goal$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    where?: GoalAllocationWhereInput
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    cursor?: GoalAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalAllocationScalarFieldEnum | GoalAllocationScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model GoalAllocation
   */

  export type AggregateGoalAllocation = {
    _count: GoalAllocationCountAggregateOutputType | null
    _avg: GoalAllocationAvgAggregateOutputType | null
    _sum: GoalAllocationSumAggregateOutputType | null
    _min: GoalAllocationMinAggregateOutputType | null
    _max: GoalAllocationMaxAggregateOutputType | null
  }

  export type GoalAllocationAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type GoalAllocationSumAggregateOutputType = {
    amountCents: number | null
  }

  export type GoalAllocationMinAggregateOutputType = {
    id: string | null
    goalId: string | null
    transactionId: string | null
    amountCents: number | null
    allocatedAt: Date | null
    note: string | null
  }

  export type GoalAllocationMaxAggregateOutputType = {
    id: string | null
    goalId: string | null
    transactionId: string | null
    amountCents: number | null
    allocatedAt: Date | null
    note: string | null
  }

  export type GoalAllocationCountAggregateOutputType = {
    id: number
    goalId: number
    transactionId: number
    amountCents: number
    allocatedAt: number
    note: number
    _all: number
  }


  export type GoalAllocationAvgAggregateInputType = {
    amountCents?: true
  }

  export type GoalAllocationSumAggregateInputType = {
    amountCents?: true
  }

  export type GoalAllocationMinAggregateInputType = {
    id?: true
    goalId?: true
    transactionId?: true
    amountCents?: true
    allocatedAt?: true
    note?: true
  }

  export type GoalAllocationMaxAggregateInputType = {
    id?: true
    goalId?: true
    transactionId?: true
    amountCents?: true
    allocatedAt?: true
    note?: true
  }

  export type GoalAllocationCountAggregateInputType = {
    id?: true
    goalId?: true
    transactionId?: true
    amountCents?: true
    allocatedAt?: true
    note?: true
    _all?: true
  }

  export type GoalAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalAllocation to aggregate.
     */
    where?: GoalAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalAllocations to fetch.
     */
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoalAllocations
    **/
    _count?: true | GoalAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalAllocationMaxAggregateInputType
  }

  export type GetGoalAllocationAggregateType<T extends GoalAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregateGoalAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoalAllocation[P]>
      : GetScalarType<T[P], AggregateGoalAllocation[P]>
  }




  export type GoalAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalAllocationWhereInput
    orderBy?: GoalAllocationOrderByWithAggregationInput | GoalAllocationOrderByWithAggregationInput[]
    by: GoalAllocationScalarFieldEnum[] | GoalAllocationScalarFieldEnum
    having?: GoalAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalAllocationCountAggregateInputType | true
    _avg?: GoalAllocationAvgAggregateInputType
    _sum?: GoalAllocationSumAggregateInputType
    _min?: GoalAllocationMinAggregateInputType
    _max?: GoalAllocationMaxAggregateInputType
  }

  export type GoalAllocationGroupByOutputType = {
    id: string
    goalId: string
    transactionId: string | null
    amountCents: number
    allocatedAt: Date
    note: string | null
    _count: GoalAllocationCountAggregateOutputType | null
    _avg: GoalAllocationAvgAggregateOutputType | null
    _sum: GoalAllocationSumAggregateOutputType | null
    _min: GoalAllocationMinAggregateOutputType | null
    _max: GoalAllocationMaxAggregateOutputType | null
  }

  type GetGoalAllocationGroupByPayload<T extends GoalAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], GoalAllocationGroupByOutputType[P]>
        }
      >
    >


  export type GoalAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    transactionId?: boolean
    amountCents?: boolean
    allocatedAt?: boolean
    note?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["goalAllocation"]>

  export type GoalAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    transactionId?: boolean
    amountCents?: boolean
    allocatedAt?: boolean
    note?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["goalAllocation"]>

  export type GoalAllocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    transactionId?: boolean
    amountCents?: boolean
    allocatedAt?: boolean
    note?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["goalAllocation"]>

  export type GoalAllocationSelectScalar = {
    id?: boolean
    goalId?: boolean
    transactionId?: boolean
    amountCents?: boolean
    allocatedAt?: boolean
    note?: boolean
  }

  export type GoalAllocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "goalId" | "transactionId" | "amountCents" | "allocatedAt" | "note", ExtArgs["result"]["goalAllocation"]>
  export type GoalAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }
  export type GoalAllocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }
  export type GoalAllocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    transaction?: boolean | GoalAllocation$transactionArgs<ExtArgs>
  }

  export type $GoalAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoalAllocation"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goalId: string
      transactionId: string | null
      amountCents: number
      allocatedAt: Date
      note: string | null
    }, ExtArgs["result"]["goalAllocation"]>
    composites: {}
  }

  type GoalAllocationGetPayload<S extends boolean | null | undefined | GoalAllocationDefaultArgs> = $Result.GetResult<Prisma.$GoalAllocationPayload, S>

  type GoalAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalAllocationCountAggregateInputType | true
    }

  export interface GoalAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoalAllocation'], meta: { name: 'GoalAllocation' } }
    /**
     * Find zero or one GoalAllocation that matches the filter.
     * @param {GoalAllocationFindUniqueArgs} args - Arguments to find a GoalAllocation
     * @example
     * // Get one GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalAllocationFindUniqueArgs>(args: SelectSubset<T, GoalAllocationFindUniqueArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoalAllocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalAllocationFindUniqueOrThrowArgs} args - Arguments to find a GoalAllocation
     * @example
     * // Get one GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationFindFirstArgs} args - Arguments to find a GoalAllocation
     * @example
     * // Get one GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalAllocationFindFirstArgs>(args?: SelectSubset<T, GoalAllocationFindFirstArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationFindFirstOrThrowArgs} args - Arguments to find a GoalAllocation
     * @example
     * // Get one GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoalAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoalAllocations
     * const goalAllocations = await prisma.goalAllocation.findMany()
     * 
     * // Get first 10 GoalAllocations
     * const goalAllocations = await prisma.goalAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalAllocationWithIdOnly = await prisma.goalAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalAllocationFindManyArgs>(args?: SelectSubset<T, GoalAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoalAllocation.
     * @param {GoalAllocationCreateArgs} args - Arguments to create a GoalAllocation.
     * @example
     * // Create one GoalAllocation
     * const GoalAllocation = await prisma.goalAllocation.create({
     *   data: {
     *     // ... data to create a GoalAllocation
     *   }
     * })
     * 
     */
    create<T extends GoalAllocationCreateArgs>(args: SelectSubset<T, GoalAllocationCreateArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoalAllocations.
     * @param {GoalAllocationCreateManyArgs} args - Arguments to create many GoalAllocations.
     * @example
     * // Create many GoalAllocations
     * const goalAllocation = await prisma.goalAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalAllocationCreateManyArgs>(args?: SelectSubset<T, GoalAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoalAllocations and returns the data saved in the database.
     * @param {GoalAllocationCreateManyAndReturnArgs} args - Arguments to create many GoalAllocations.
     * @example
     * // Create many GoalAllocations
     * const goalAllocation = await prisma.goalAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoalAllocations and only return the `id`
     * const goalAllocationWithIdOnly = await prisma.goalAllocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoalAllocation.
     * @param {GoalAllocationDeleteArgs} args - Arguments to delete one GoalAllocation.
     * @example
     * // Delete one GoalAllocation
     * const GoalAllocation = await prisma.goalAllocation.delete({
     *   where: {
     *     // ... filter to delete one GoalAllocation
     *   }
     * })
     * 
     */
    delete<T extends GoalAllocationDeleteArgs>(args: SelectSubset<T, GoalAllocationDeleteArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoalAllocation.
     * @param {GoalAllocationUpdateArgs} args - Arguments to update one GoalAllocation.
     * @example
     * // Update one GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalAllocationUpdateArgs>(args: SelectSubset<T, GoalAllocationUpdateArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoalAllocations.
     * @param {GoalAllocationDeleteManyArgs} args - Arguments to filter GoalAllocations to delete.
     * @example
     * // Delete a few GoalAllocations
     * const { count } = await prisma.goalAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalAllocationDeleteManyArgs>(args?: SelectSubset<T, GoalAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoalAllocations
     * const goalAllocation = await prisma.goalAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalAllocationUpdateManyArgs>(args: SelectSubset<T, GoalAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalAllocations and returns the data updated in the database.
     * @param {GoalAllocationUpdateManyAndReturnArgs} args - Arguments to update many GoalAllocations.
     * @example
     * // Update many GoalAllocations
     * const goalAllocation = await prisma.goalAllocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoalAllocations and only return the `id`
     * const goalAllocationWithIdOnly = await prisma.goalAllocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalAllocationUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoalAllocation.
     * @param {GoalAllocationUpsertArgs} args - Arguments to update or create a GoalAllocation.
     * @example
     * // Update or create a GoalAllocation
     * const goalAllocation = await prisma.goalAllocation.upsert({
     *   create: {
     *     // ... data to create a GoalAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoalAllocation we want to update
     *   }
     * })
     */
    upsert<T extends GoalAllocationUpsertArgs>(args: SelectSubset<T, GoalAllocationUpsertArgs<ExtArgs>>): Prisma__GoalAllocationClient<$Result.GetResult<Prisma.$GoalAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoalAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationCountArgs} args - Arguments to filter GoalAllocations to count.
     * @example
     * // Count the number of GoalAllocations
     * const count = await prisma.goalAllocation.count({
     *   where: {
     *     // ... the filter for the GoalAllocations we want to count
     *   }
     * })
    **/
    count<T extends GoalAllocationCountArgs>(
      args?: Subset<T, GoalAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoalAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAllocationAggregateArgs>(args: Subset<T, GoalAllocationAggregateArgs>): Prisma.PrismaPromise<GetGoalAllocationAggregateType<T>>

    /**
     * Group by GoalAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAllocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalAllocationGroupByArgs['orderBy'] }
        : { orderBy?: GoalAllocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoalAllocation model
   */
  readonly fields: GoalAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoalAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends GoalAllocation$transactionArgs<ExtArgs> = {}>(args?: Subset<T, GoalAllocation$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoalAllocation model
   */
  interface GoalAllocationFieldRefs {
    readonly id: FieldRef<"GoalAllocation", 'String'>
    readonly goalId: FieldRef<"GoalAllocation", 'String'>
    readonly transactionId: FieldRef<"GoalAllocation", 'String'>
    readonly amountCents: FieldRef<"GoalAllocation", 'Int'>
    readonly allocatedAt: FieldRef<"GoalAllocation", 'DateTime'>
    readonly note: FieldRef<"GoalAllocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GoalAllocation findUnique
   */
  export type GoalAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter, which GoalAllocation to fetch.
     */
    where: GoalAllocationWhereUniqueInput
  }

  /**
   * GoalAllocation findUniqueOrThrow
   */
  export type GoalAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter, which GoalAllocation to fetch.
     */
    where: GoalAllocationWhereUniqueInput
  }

  /**
   * GoalAllocation findFirst
   */
  export type GoalAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter, which GoalAllocation to fetch.
     */
    where?: GoalAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalAllocations to fetch.
     */
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalAllocations.
     */
    cursor?: GoalAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalAllocations.
     */
    distinct?: GoalAllocationScalarFieldEnum | GoalAllocationScalarFieldEnum[]
  }

  /**
   * GoalAllocation findFirstOrThrow
   */
  export type GoalAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter, which GoalAllocation to fetch.
     */
    where?: GoalAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalAllocations to fetch.
     */
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalAllocations.
     */
    cursor?: GoalAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalAllocations.
     */
    distinct?: GoalAllocationScalarFieldEnum | GoalAllocationScalarFieldEnum[]
  }

  /**
   * GoalAllocation findMany
   */
  export type GoalAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter, which GoalAllocations to fetch.
     */
    where?: GoalAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalAllocations to fetch.
     */
    orderBy?: GoalAllocationOrderByWithRelationInput | GoalAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoalAllocations.
     */
    cursor?: GoalAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalAllocations.
     */
    skip?: number
    distinct?: GoalAllocationScalarFieldEnum | GoalAllocationScalarFieldEnum[]
  }

  /**
   * GoalAllocation create
   */
  export type GoalAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a GoalAllocation.
     */
    data: XOR<GoalAllocationCreateInput, GoalAllocationUncheckedCreateInput>
  }

  /**
   * GoalAllocation createMany
   */
  export type GoalAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoalAllocations.
     */
    data: GoalAllocationCreateManyInput | GoalAllocationCreateManyInput[]
  }

  /**
   * GoalAllocation createManyAndReturn
   */
  export type GoalAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * The data used to create many GoalAllocations.
     */
    data: GoalAllocationCreateManyInput | GoalAllocationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoalAllocation update
   */
  export type GoalAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a GoalAllocation.
     */
    data: XOR<GoalAllocationUpdateInput, GoalAllocationUncheckedUpdateInput>
    /**
     * Choose, which GoalAllocation to update.
     */
    where: GoalAllocationWhereUniqueInput
  }

  /**
   * GoalAllocation updateMany
   */
  export type GoalAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoalAllocations.
     */
    data: XOR<GoalAllocationUpdateManyMutationInput, GoalAllocationUncheckedUpdateManyInput>
    /**
     * Filter which GoalAllocations to update
     */
    where?: GoalAllocationWhereInput
    /**
     * Limit how many GoalAllocations to update.
     */
    limit?: number
  }

  /**
   * GoalAllocation updateManyAndReturn
   */
  export type GoalAllocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * The data used to update GoalAllocations.
     */
    data: XOR<GoalAllocationUpdateManyMutationInput, GoalAllocationUncheckedUpdateManyInput>
    /**
     * Filter which GoalAllocations to update
     */
    where?: GoalAllocationWhereInput
    /**
     * Limit how many GoalAllocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoalAllocation upsert
   */
  export type GoalAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the GoalAllocation to update in case it exists.
     */
    where: GoalAllocationWhereUniqueInput
    /**
     * In case the GoalAllocation found by the `where` argument doesn't exist, create a new GoalAllocation with this data.
     */
    create: XOR<GoalAllocationCreateInput, GoalAllocationUncheckedCreateInput>
    /**
     * In case the GoalAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalAllocationUpdateInput, GoalAllocationUncheckedUpdateInput>
  }

  /**
   * GoalAllocation delete
   */
  export type GoalAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
    /**
     * Filter which GoalAllocation to delete.
     */
    where: GoalAllocationWhereUniqueInput
  }

  /**
   * GoalAllocation deleteMany
   */
  export type GoalAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalAllocations to delete
     */
    where?: GoalAllocationWhereInput
    /**
     * Limit how many GoalAllocations to delete.
     */
    limit?: number
  }

  /**
   * GoalAllocation.transaction
   */
  export type GoalAllocation$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * GoalAllocation without action
   */
  export type GoalAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalAllocation
     */
    select?: GoalAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalAllocation
     */
    omit?: GoalAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalAllocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WalletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    kind: 'kind',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    categoryId: 'categoryId',
    type: 'type',
    description: 'description',
    amountCents: 'amountCents',
    dueDate: 'dueDate',
    settlementDueDate: 'settlementDueDate',
    paidAt: 'paidAt',
    sourcePlanId: 'sourcePlanId',
    installmentIndex: 'installmentIndex',
    installmentTotal: 'installmentTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    name: 'name',
    color: 'color',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TransactionTagScalarFieldEnum: {
    transactionId: 'transactionId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type TransactionTagScalarFieldEnum = (typeof TransactionTagScalarFieldEnum)[keyof typeof TransactionTagScalarFieldEnum]


  export const MonthlyTagBudgetScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    tagId: 'tagId',
    monthKey: 'monthKey',
    limitCents: 'limitCents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyTagBudgetScalarFieldEnum = (typeof MonthlyTagBudgetScalarFieldEnum)[keyof typeof MonthlyTagBudgetScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    categoryId: 'categoryId',
    type: 'type',
    transactionType: 'transactionType',
    description: 'description',
    amountCents: 'amountCents',
    startDate: 'startDate',
    endDate: 'endDate',
    intervalValue: 'intervalValue',
    recurrenceUnit: 'recurrenceUnit',
    installments: 'installments',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PlanTagScalarFieldEnum: {
    planId: 'planId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type PlanTagScalarFieldEnum = (typeof PlanTagScalarFieldEnum)[keyof typeof PlanTagScalarFieldEnum]


  export const PlanOccurrenceScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    dueDate: 'dueDate',
    amountCents: 'amountCents',
    isGenerated: 'isGenerated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanOccurrenceScalarFieldEnum = (typeof PlanOccurrenceScalarFieldEnum)[keyof typeof PlanOccurrenceScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    name: 'name',
    targetCents: 'targetCents',
    initialAmountCents: 'initialAmountCents',
    participantCount: 'participantCount',
    targetDate: 'targetDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const GoalAllocationScalarFieldEnum: {
    id: 'id',
    goalId: 'goalId',
    transactionId: 'transactionId',
    amountCents: 'amountCents',
    allocatedAt: 'allocatedAt',
    note: 'note'
  };

  export type GoalAllocationScalarFieldEnum = (typeof GoalAllocationScalarFieldEnum)[keyof typeof GoalAllocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'RecurrenceUnit'
   */
  export type EnumRecurrenceUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurrenceUnit'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    name?: StringFilter<"Wallet"> | string
    description?: StringNullableFilter<"Wallet"> | string | null
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    transactions?: TransactionListRelationFilter
    plans?: PlanListRelationFilter
    goals?: GoalListRelationFilter
    tags?: TagListRelationFilter
    tagBudgets?: MonthlyTagBudgetListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    tagBudgets?: MonthlyTagBudgetOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    name?: StringFilter<"Wallet"> | string
    description?: StringNullableFilter<"Wallet"> | string | null
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    transactions?: TransactionListRelationFilter
    plans?: PlanListRelationFilter
    goals?: GoalListRelationFilter
    tags?: TagListRelationFilter
    tagBudgets?: MonthlyTagBudgetListRelationFilter
  }, "id">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    name?: StringWithAggregatesFilter<"Wallet"> | string
    description?: StringNullableWithAggregatesFilter<"Wallet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    kind?: EnumTransactionTypeFilter<"Category"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    transactions?: TransactionListRelationFilter
    plans?: PlanListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_kind?: CategoryNameKindCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    kind?: EnumTransactionTypeFilter<"Category"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    transactions?: TransactionListRelationFilter
    plans?: PlanListRelationFilter
  }, "id" | "name_kind">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    kind?: EnumTransactionTypeWithAggregatesFilter<"Category"> | $Enums.TransactionType
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    description?: StringNullableFilter<"Transaction"> | string | null
    amountCents?: IntFilter<"Transaction"> | number
    dueDate?: DateTimeFilter<"Transaction"> | Date | string
    settlementDueDate?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    sourcePlanId?: StringNullableFilter<"Transaction"> | string | null
    installmentIndex?: IntNullableFilter<"Transaction"> | number | null
    installmentTotal?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    sourcePlan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
    goalAllocations?: GoalAllocationListRelationFilter
    tags?: TransactionTagListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    dueDate?: SortOrder
    settlementDueDate?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    sourcePlanId?: SortOrderInput | SortOrder
    installmentIndex?: SortOrderInput | SortOrder
    installmentTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    sourcePlan?: PlanOrderByWithRelationInput
    goalAllocations?: GoalAllocationOrderByRelationAggregateInput
    tags?: TransactionTagOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    walletId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    description?: StringNullableFilter<"Transaction"> | string | null
    amountCents?: IntFilter<"Transaction"> | number
    dueDate?: DateTimeFilter<"Transaction"> | Date | string
    settlementDueDate?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    sourcePlanId?: StringNullableFilter<"Transaction"> | string | null
    installmentIndex?: IntNullableFilter<"Transaction"> | number | null
    installmentTotal?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    sourcePlan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
    goalAllocations?: GoalAllocationListRelationFilter
    tags?: TransactionTagListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    dueDate?: SortOrder
    settlementDueDate?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    sourcePlanId?: SortOrderInput | SortOrder
    installmentIndex?: SortOrderInput | SortOrder
    installmentTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    walletId?: StringWithAggregatesFilter<"Transaction"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amountCents?: IntWithAggregatesFilter<"Transaction"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    settlementDueDate?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    sourcePlanId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    installmentIndex?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    installmentTotal?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    walletId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    isArchived?: BoolFilter<"Tag"> | boolean
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transactions?: TransactionTagListRelationFilter
    plans?: PlanTagListRelationFilter
    budgets?: MonthlyTagBudgetListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    transactions?: TransactionTagOrderByRelationAggregateInput
    plans?: PlanTagOrderByRelationAggregateInput
    budgets?: MonthlyTagBudgetOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletId_name?: TagWalletIdNameCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    walletId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    isArchived?: BoolFilter<"Tag"> | boolean
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transactions?: TransactionTagListRelationFilter
    plans?: PlanTagListRelationFilter
    budgets?: MonthlyTagBudgetListRelationFilter
  }, "id" | "walletId_name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    walletId?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringWithAggregatesFilter<"Tag"> | string
    isArchived?: BoolWithAggregatesFilter<"Tag"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type TransactionTagWhereInput = {
    AND?: TransactionTagWhereInput | TransactionTagWhereInput[]
    OR?: TransactionTagWhereInput[]
    NOT?: TransactionTagWhereInput | TransactionTagWhereInput[]
    transactionId?: StringFilter<"TransactionTag"> | string
    tagId?: StringFilter<"TransactionTag"> | string
    createdAt?: DateTimeFilter<"TransactionTag"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TransactionTagOrderByWithRelationInput = {
    transactionId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TransactionTagWhereUniqueInput = Prisma.AtLeast<{
    transactionId_tagId?: TransactionTagTransactionIdTagIdCompoundUniqueInput
    AND?: TransactionTagWhereInput | TransactionTagWhereInput[]
    OR?: TransactionTagWhereInput[]
    NOT?: TransactionTagWhereInput | TransactionTagWhereInput[]
    transactionId?: StringFilter<"TransactionTag"> | string
    tagId?: StringFilter<"TransactionTag"> | string
    createdAt?: DateTimeFilter<"TransactionTag"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "transactionId_tagId">

  export type TransactionTagOrderByWithAggregationInput = {
    transactionId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionTagCountOrderByAggregateInput
    _max?: TransactionTagMaxOrderByAggregateInput
    _min?: TransactionTagMinOrderByAggregateInput
  }

  export type TransactionTagScalarWhereWithAggregatesInput = {
    AND?: TransactionTagScalarWhereWithAggregatesInput | TransactionTagScalarWhereWithAggregatesInput[]
    OR?: TransactionTagScalarWhereWithAggregatesInput[]
    NOT?: TransactionTagScalarWhereWithAggregatesInput | TransactionTagScalarWhereWithAggregatesInput[]
    transactionId?: StringWithAggregatesFilter<"TransactionTag"> | string
    tagId?: StringWithAggregatesFilter<"TransactionTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransactionTag"> | Date | string
  }

  export type MonthlyTagBudgetWhereInput = {
    AND?: MonthlyTagBudgetWhereInput | MonthlyTagBudgetWhereInput[]
    OR?: MonthlyTagBudgetWhereInput[]
    NOT?: MonthlyTagBudgetWhereInput | MonthlyTagBudgetWhereInput[]
    id?: StringFilter<"MonthlyTagBudget"> | string
    walletId?: StringFilter<"MonthlyTagBudget"> | string
    tagId?: StringFilter<"MonthlyTagBudget"> | string
    monthKey?: StringFilter<"MonthlyTagBudget"> | string
    limitCents?: IntFilter<"MonthlyTagBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type MonthlyTagBudgetOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    tagId?: SortOrder
    monthKey?: SortOrder
    limitCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type MonthlyTagBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletId_tagId_monthKey?: MonthlyTagBudgetWalletIdTagIdMonthKeyCompoundUniqueInput
    AND?: MonthlyTagBudgetWhereInput | MonthlyTagBudgetWhereInput[]
    OR?: MonthlyTagBudgetWhereInput[]
    NOT?: MonthlyTagBudgetWhereInput | MonthlyTagBudgetWhereInput[]
    walletId?: StringFilter<"MonthlyTagBudget"> | string
    tagId?: StringFilter<"MonthlyTagBudget"> | string
    monthKey?: StringFilter<"MonthlyTagBudget"> | string
    limitCents?: IntFilter<"MonthlyTagBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id" | "walletId_tagId_monthKey">

  export type MonthlyTagBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    tagId?: SortOrder
    monthKey?: SortOrder
    limitCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyTagBudgetCountOrderByAggregateInput
    _avg?: MonthlyTagBudgetAvgOrderByAggregateInput
    _max?: MonthlyTagBudgetMaxOrderByAggregateInput
    _min?: MonthlyTagBudgetMinOrderByAggregateInput
    _sum?: MonthlyTagBudgetSumOrderByAggregateInput
  }

  export type MonthlyTagBudgetScalarWhereWithAggregatesInput = {
    AND?: MonthlyTagBudgetScalarWhereWithAggregatesInput | MonthlyTagBudgetScalarWhereWithAggregatesInput[]
    OR?: MonthlyTagBudgetScalarWhereWithAggregatesInput[]
    NOT?: MonthlyTagBudgetScalarWhereWithAggregatesInput | MonthlyTagBudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyTagBudget"> | string
    walletId?: StringWithAggregatesFilter<"MonthlyTagBudget"> | string
    tagId?: StringWithAggregatesFilter<"MonthlyTagBudget"> | string
    monthKey?: StringWithAggregatesFilter<"MonthlyTagBudget"> | string
    limitCents?: IntWithAggregatesFilter<"MonthlyTagBudget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyTagBudget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyTagBudget"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    walletId?: StringFilter<"Plan"> | string
    categoryId?: StringNullableFilter<"Plan"> | string | null
    type?: EnumPlanTypeFilter<"Plan"> | $Enums.PlanType
    transactionType?: EnumTransactionTypeFilter<"Plan"> | $Enums.TransactionType
    description?: StringNullableFilter<"Plan"> | string | null
    amountCents?: IntFilter<"Plan"> | number
    startDate?: DateTimeFilter<"Plan"> | Date | string
    endDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    intervalValue?: IntFilter<"Plan"> | number
    recurrenceUnit?: EnumRecurrenceUnitNullableFilter<"Plan"> | $Enums.RecurrenceUnit | null
    installments?: IntNullableFilter<"Plan"> | number | null
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    occurrences?: PlanOccurrenceListRelationFilter
    transactions?: TransactionListRelationFilter
    tags?: PlanTagListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    type?: SortOrder
    transactionType?: SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    intervalValue?: SortOrder
    recurrenceUnit?: SortOrderInput | SortOrder
    installments?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    occurrences?: PlanOccurrenceOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    tags?: PlanTagOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    walletId?: StringFilter<"Plan"> | string
    categoryId?: StringNullableFilter<"Plan"> | string | null
    type?: EnumPlanTypeFilter<"Plan"> | $Enums.PlanType
    transactionType?: EnumTransactionTypeFilter<"Plan"> | $Enums.TransactionType
    description?: StringNullableFilter<"Plan"> | string | null
    amountCents?: IntFilter<"Plan"> | number
    startDate?: DateTimeFilter<"Plan"> | Date | string
    endDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    intervalValue?: IntFilter<"Plan"> | number
    recurrenceUnit?: EnumRecurrenceUnitNullableFilter<"Plan"> | $Enums.RecurrenceUnit | null
    installments?: IntNullableFilter<"Plan"> | number | null
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    occurrences?: PlanOccurrenceListRelationFilter
    transactions?: TransactionListRelationFilter
    tags?: PlanTagListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    type?: SortOrder
    transactionType?: SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    intervalValue?: SortOrder
    recurrenceUnit?: SortOrderInput | SortOrder
    installments?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    walletId?: StringWithAggregatesFilter<"Plan"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    type?: EnumPlanTypeWithAggregatesFilter<"Plan"> | $Enums.PlanType
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"Plan"> | $Enums.TransactionType
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    amountCents?: IntWithAggregatesFilter<"Plan"> | number
    startDate?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
    intervalValue?: IntWithAggregatesFilter<"Plan"> | number
    recurrenceUnit?: EnumRecurrenceUnitNullableWithAggregatesFilter<"Plan"> | $Enums.RecurrenceUnit | null
    installments?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type PlanTagWhereInput = {
    AND?: PlanTagWhereInput | PlanTagWhereInput[]
    OR?: PlanTagWhereInput[]
    NOT?: PlanTagWhereInput | PlanTagWhereInput[]
    planId?: StringFilter<"PlanTag"> | string
    tagId?: StringFilter<"PlanTag"> | string
    createdAt?: DateTimeFilter<"PlanTag"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PlanTagOrderByWithRelationInput = {
    planId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PlanTagWhereUniqueInput = Prisma.AtLeast<{
    planId_tagId?: PlanTagPlanIdTagIdCompoundUniqueInput
    AND?: PlanTagWhereInput | PlanTagWhereInput[]
    OR?: PlanTagWhereInput[]
    NOT?: PlanTagWhereInput | PlanTagWhereInput[]
    planId?: StringFilter<"PlanTag"> | string
    tagId?: StringFilter<"PlanTag"> | string
    createdAt?: DateTimeFilter<"PlanTag"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "planId_tagId">

  export type PlanTagOrderByWithAggregationInput = {
    planId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: PlanTagCountOrderByAggregateInput
    _max?: PlanTagMaxOrderByAggregateInput
    _min?: PlanTagMinOrderByAggregateInput
  }

  export type PlanTagScalarWhereWithAggregatesInput = {
    AND?: PlanTagScalarWhereWithAggregatesInput | PlanTagScalarWhereWithAggregatesInput[]
    OR?: PlanTagScalarWhereWithAggregatesInput[]
    NOT?: PlanTagScalarWhereWithAggregatesInput | PlanTagScalarWhereWithAggregatesInput[]
    planId?: StringWithAggregatesFilter<"PlanTag"> | string
    tagId?: StringWithAggregatesFilter<"PlanTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlanTag"> | Date | string
  }

  export type PlanOccurrenceWhereInput = {
    AND?: PlanOccurrenceWhereInput | PlanOccurrenceWhereInput[]
    OR?: PlanOccurrenceWhereInput[]
    NOT?: PlanOccurrenceWhereInput | PlanOccurrenceWhereInput[]
    id?: StringFilter<"PlanOccurrence"> | string
    planId?: StringFilter<"PlanOccurrence"> | string
    dueDate?: DateTimeFilter<"PlanOccurrence"> | Date | string
    amountCents?: IntFilter<"PlanOccurrence"> | number
    isGenerated?: BoolFilter<"PlanOccurrence"> | boolean
    createdAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
    updatedAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }

  export type PlanOccurrenceOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    dueDate?: SortOrder
    amountCents?: SortOrder
    isGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
  }

  export type PlanOccurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_dueDate?: PlanOccurrencePlanIdDueDateCompoundUniqueInput
    AND?: PlanOccurrenceWhereInput | PlanOccurrenceWhereInput[]
    OR?: PlanOccurrenceWhereInput[]
    NOT?: PlanOccurrenceWhereInput | PlanOccurrenceWhereInput[]
    planId?: StringFilter<"PlanOccurrence"> | string
    dueDate?: DateTimeFilter<"PlanOccurrence"> | Date | string
    amountCents?: IntFilter<"PlanOccurrence"> | number
    isGenerated?: BoolFilter<"PlanOccurrence"> | boolean
    createdAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
    updatedAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }, "id" | "planId_dueDate">

  export type PlanOccurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    dueDate?: SortOrder
    amountCents?: SortOrder
    isGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanOccurrenceCountOrderByAggregateInput
    _avg?: PlanOccurrenceAvgOrderByAggregateInput
    _max?: PlanOccurrenceMaxOrderByAggregateInput
    _min?: PlanOccurrenceMinOrderByAggregateInput
    _sum?: PlanOccurrenceSumOrderByAggregateInput
  }

  export type PlanOccurrenceScalarWhereWithAggregatesInput = {
    AND?: PlanOccurrenceScalarWhereWithAggregatesInput | PlanOccurrenceScalarWhereWithAggregatesInput[]
    OR?: PlanOccurrenceScalarWhereWithAggregatesInput[]
    NOT?: PlanOccurrenceScalarWhereWithAggregatesInput | PlanOccurrenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanOccurrence"> | string
    planId?: StringWithAggregatesFilter<"PlanOccurrence"> | string
    dueDate?: DateTimeWithAggregatesFilter<"PlanOccurrence"> | Date | string
    amountCents?: IntWithAggregatesFilter<"PlanOccurrence"> | number
    isGenerated?: BoolWithAggregatesFilter<"PlanOccurrence"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlanOccurrence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanOccurrence"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    walletId?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    targetCents?: IntFilter<"Goal"> | number
    initialAmountCents?: IntFilter<"Goal"> | number
    participantCount?: IntFilter<"Goal"> | number
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    allocations?: GoalAllocationListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    allocations?: GoalAllocationOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    walletId?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    targetCents?: IntFilter<"Goal"> | number
    initialAmountCents?: IntFilter<"Goal"> | number
    participantCount?: IntFilter<"Goal"> | number
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    allocations?: GoalAllocationListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    walletId?: StringWithAggregatesFilter<"Goal"> | string
    name?: StringWithAggregatesFilter<"Goal"> | string
    targetCents?: IntWithAggregatesFilter<"Goal"> | number
    initialAmountCents?: IntWithAggregatesFilter<"Goal"> | number
    participantCount?: IntWithAggregatesFilter<"Goal"> | number
    targetDate?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type GoalAllocationWhereInput = {
    AND?: GoalAllocationWhereInput | GoalAllocationWhereInput[]
    OR?: GoalAllocationWhereInput[]
    NOT?: GoalAllocationWhereInput | GoalAllocationWhereInput[]
    id?: StringFilter<"GoalAllocation"> | string
    goalId?: StringFilter<"GoalAllocation"> | string
    transactionId?: StringNullableFilter<"GoalAllocation"> | string | null
    amountCents?: IntFilter<"GoalAllocation"> | number
    allocatedAt?: DateTimeFilter<"GoalAllocation"> | Date | string
    note?: StringNullableFilter<"GoalAllocation"> | string | null
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type GoalAllocationOrderByWithRelationInput = {
    id?: SortOrder
    goalId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    allocatedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    goal?: GoalOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type GoalAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalAllocationWhereInput | GoalAllocationWhereInput[]
    OR?: GoalAllocationWhereInput[]
    NOT?: GoalAllocationWhereInput | GoalAllocationWhereInput[]
    goalId?: StringFilter<"GoalAllocation"> | string
    transactionId?: StringNullableFilter<"GoalAllocation"> | string | null
    amountCents?: IntFilter<"GoalAllocation"> | number
    allocatedAt?: DateTimeFilter<"GoalAllocation"> | Date | string
    note?: StringNullableFilter<"GoalAllocation"> | string | null
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type GoalAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    goalId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    allocatedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: GoalAllocationCountOrderByAggregateInput
    _avg?: GoalAllocationAvgOrderByAggregateInput
    _max?: GoalAllocationMaxOrderByAggregateInput
    _min?: GoalAllocationMinOrderByAggregateInput
    _sum?: GoalAllocationSumOrderByAggregateInput
  }

  export type GoalAllocationScalarWhereWithAggregatesInput = {
    AND?: GoalAllocationScalarWhereWithAggregatesInput | GoalAllocationScalarWhereWithAggregatesInput[]
    OR?: GoalAllocationScalarWhereWithAggregatesInput[]
    NOT?: GoalAllocationScalarWhereWithAggregatesInput | GoalAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoalAllocation"> | string
    goalId?: StringWithAggregatesFilter<"GoalAllocation"> | string
    transactionId?: StringNullableWithAggregatesFilter<"GoalAllocation"> | string | null
    amountCents?: IntWithAggregatesFilter<"GoalAllocation"> | number
    allocatedAt?: DateTimeWithAggregatesFilter<"GoalAllocation"> | Date | string
    note?: StringNullableWithAggregatesFilter<"GoalAllocation"> | string | null
  }

  export type WalletCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    plans?: PlanCreateNestedManyWithoutWalletInput
    goals?: GoalCreateNestedManyWithoutWalletInput
    tags?: TagCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    plans?: PlanUncheckedCreateNestedManyWithoutWalletInput
    goals?: GoalUncheckedCreateNestedManyWithoutWalletInput
    tags?: TagUncheckedCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    plans?: PlanUpdateManyWithoutWalletNestedInput
    goals?: GoalUpdateManyWithoutWalletNestedInput
    tags?: TagUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    plans?: PlanUncheckedUpdateManyWithoutWalletNestedInput
    goals?: GoalUncheckedUpdateManyWithoutWalletNestedInput
    tags?: TagUncheckedUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    plans?: PlanCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    plans?: PlanUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    plans?: PlanUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    plans?: PlanUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sourcePlan?: PlanCreateNestedOneWithoutTransactionsInput
    goalAllocations?: GoalAllocationCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goalAllocations?: GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sourcePlan?: PlanUpdateOneWithoutTransactionsNestedInput
    goalAllocations?: GoalAllocationUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAllocations?: GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagsInput
    transactions?: TransactionTagCreateNestedManyWithoutTagInput
    plans?: PlanTagCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    walletId: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionTagUncheckedCreateNestedManyWithoutTagInput
    plans?: PlanTagUncheckedCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagsNestedInput
    transactions?: TransactionTagUpdateManyWithoutTagNestedInput
    plans?: PlanTagUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionTagUncheckedUpdateManyWithoutTagNestedInput
    plans?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    walletId: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagCreateInput = {
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTagUncheckedCreateInput = {
    transactionId: string
    tagId: string
    createdAt?: Date | string
  }

  export type TransactionTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTagUncheckedUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagCreateManyInput = {
    transactionId: string
    tagId: string
    createdAt?: Date | string
  }

  export type TransactionTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagUncheckedUpdateManyInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetCreateInput = {
    id?: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagBudgetsInput
    tag: TagCreateNestedOneWithoutBudgetsInput
  }

  export type MonthlyTagBudgetUncheckedCreateInput = {
    id?: string
    walletId: string
    tagId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyTagBudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagBudgetsNestedInput
    tag?: TagUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type MonthlyTagBudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetCreateManyInput = {
    id?: string
    walletId: string
    tagId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyTagBudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPlansInput
    category?: CategoryCreateNestedOneWithoutPlansInput
    occurrences?: PlanOccurrenceCreateNestedManyWithoutPlanInput
    transactions?: TransactionCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    occurrences?: PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPlansNestedInput
    category?: CategoryUpdateOneWithoutPlansNestedInput
    occurrences?: PlanOccurrenceUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    occurrences?: PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagCreateInput = {
    createdAt?: Date | string
    plan: PlanCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPlansInput
  }

  export type PlanTagUncheckedCreateInput = {
    planId: string
    tagId: string
    createdAt?: Date | string
  }

  export type PlanTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanTagUncheckedUpdateInput = {
    planId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagCreateManyInput = {
    planId: string
    tagId: string
    createdAt?: Date | string
  }

  export type PlanTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUncheckedUpdateManyInput = {
    planId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceCreateInput = {
    id?: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutOccurrencesInput
  }

  export type PlanOccurrenceUncheckedCreateInput = {
    id?: string
    planId: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanOccurrenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutOccurrencesNestedInput
  }

  export type PlanOccurrenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceCreateManyInput = {
    id?: string
    planId: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanOccurrenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutGoalsInput
    allocations?: GoalAllocationCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    walletId: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: GoalAllocationUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutGoalsNestedInput
    allocations?: GoalAllocationUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: GoalAllocationUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    walletId: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalAllocationCreateInput = {
    id?: string
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
    goal: GoalCreateNestedOneWithoutAllocationsInput
    transaction?: TransactionCreateNestedOneWithoutGoalAllocationsInput
  }

  export type GoalAllocationUncheckedCreateInput = {
    id?: string
    goalId: string
    transactionId?: string | null
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type GoalAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: GoalUpdateOneRequiredWithoutAllocationsNestedInput
    transaction?: TransactionUpdateOneWithoutGoalAllocationsNestedInput
  }

  export type GoalAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalAllocationCreateManyInput = {
    id?: string
    goalId: string
    transactionId?: string | null
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type GoalAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type MonthlyTagBudgetListRelationFilter = {
    every?: MonthlyTagBudgetWhereInput
    some?: MonthlyTagBudgetWhereInput
    none?: MonthlyTagBudgetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyTagBudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type CategoryNameKindCompoundUniqueInput = {
    name: string
    kind: $Enums.TransactionType
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type PlanNullableScalarRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type GoalAllocationListRelationFilter = {
    every?: GoalAllocationWhereInput
    some?: GoalAllocationWhereInput
    none?: GoalAllocationWhereInput
  }

  export type TransactionTagListRelationFilter = {
    every?: TransactionTagWhereInput
    some?: TransactionTagWhereInput
    none?: TransactionTagWhereInput
  }

  export type GoalAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    dueDate?: SortOrder
    settlementDueDate?: SortOrder
    paidAt?: SortOrder
    sourcePlanId?: SortOrder
    installmentIndex?: SortOrder
    installmentTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amountCents?: SortOrder
    installmentIndex?: SortOrder
    installmentTotal?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    dueDate?: SortOrder
    settlementDueDate?: SortOrder
    paidAt?: SortOrder
    sourcePlanId?: SortOrder
    installmentIndex?: SortOrder
    installmentTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    dueDate?: SortOrder
    settlementDueDate?: SortOrder
    paidAt?: SortOrder
    sourcePlanId?: SortOrder
    installmentIndex?: SortOrder
    installmentTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amountCents?: SortOrder
    installmentIndex?: SortOrder
    installmentTotal?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlanTagListRelationFilter = {
    every?: PlanTagWhereInput
    some?: PlanTagWhereInput
    none?: PlanTagWhereInput
  }

  export type PlanTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagWalletIdNameCompoundUniqueInput = {
    walletId: string
    name: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TransactionTagTransactionIdTagIdCompoundUniqueInput = {
    transactionId: string
    tagId: string
  }

  export type TransactionTagCountOrderByAggregateInput = {
    transactionId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionTagMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionTagMinOrderByAggregateInput = {
    transactionId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlyTagBudgetWalletIdTagIdMonthKeyCompoundUniqueInput = {
    walletId: string
    tagId: string
    monthKey: string
  }

  export type MonthlyTagBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    tagId?: SortOrder
    monthKey?: SortOrder
    limitCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyTagBudgetAvgOrderByAggregateInput = {
    limitCents?: SortOrder
  }

  export type MonthlyTagBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    tagId?: SortOrder
    monthKey?: SortOrder
    limitCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyTagBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    tagId?: SortOrder
    monthKey?: SortOrder
    limitCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyTagBudgetSumOrderByAggregateInput = {
    limitCents?: SortOrder
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[]
    notIn?: $Enums.PlanType[]
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumRecurrenceUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceUnit | EnumRecurrenceUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurrenceUnit[] | null
    notIn?: $Enums.RecurrenceUnit[] | null
    not?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel> | $Enums.RecurrenceUnit | null
  }

  export type PlanOccurrenceListRelationFilter = {
    every?: PlanOccurrenceWhereInput
    some?: PlanOccurrenceWhereInput
    none?: PlanOccurrenceWhereInput
  }

  export type PlanOccurrenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    transactionType?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    intervalValue?: SortOrder
    recurrenceUnit?: SortOrder
    installments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    amountCents?: SortOrder
    intervalValue?: SortOrder
    installments?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    transactionType?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    intervalValue?: SortOrder
    recurrenceUnit?: SortOrder
    installments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    transactionType?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    intervalValue?: SortOrder
    recurrenceUnit?: SortOrder
    installments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    amountCents?: SortOrder
    intervalValue?: SortOrder
    installments?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[]
    notIn?: $Enums.PlanType[]
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumRecurrenceUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceUnit | EnumRecurrenceUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurrenceUnit[] | null
    notIn?: $Enums.RecurrenceUnit[] | null
    not?: NestedEnumRecurrenceUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel>
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type PlanTagPlanIdTagIdCompoundUniqueInput = {
    planId: string
    tagId: string
  }

  export type PlanTagCountOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanTagMaxOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanTagMinOrderByAggregateInput = {
    planId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanOccurrencePlanIdDueDateCompoundUniqueInput = {
    planId: string
    dueDate: Date | string
  }

  export type PlanOccurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    dueDate?: SortOrder
    amountCents?: SortOrder
    isGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanOccurrenceAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type PlanOccurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    dueDate?: SortOrder
    amountCents?: SortOrder
    isGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanOccurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    dueDate?: SortOrder
    amountCents?: SortOrder
    isGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanOccurrenceSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    name?: SortOrder
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetCents?: SortOrder
    initialAmountCents?: SortOrder
    participantCount?: SortOrder
  }

  export type GoalScalarRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type GoalAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    transactionId?: SortOrder
    amountCents?: SortOrder
    allocatedAt?: SortOrder
    note?: SortOrder
  }

  export type GoalAllocationAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type GoalAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    transactionId?: SortOrder
    amountCents?: SortOrder
    allocatedAt?: SortOrder
    note?: SortOrder
  }

  export type GoalAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    transactionId?: SortOrder
    amountCents?: SortOrder
    allocatedAt?: SortOrder
    note?: SortOrder
  }

  export type GoalAllocationSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutWalletInput = {
    create?: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput> | PlanCreateWithoutWalletInput[] | PlanUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutWalletInput | PlanCreateOrConnectWithoutWalletInput[]
    createMany?: PlanCreateManyWalletInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutWalletInput = {
    create?: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput> | GoalCreateWithoutWalletInput[] | GoalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWalletInput | GoalCreateOrConnectWithoutWalletInput[]
    createMany?: GoalCreateManyWalletInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutWalletInput = {
    create?: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput> | TagCreateWithoutWalletInput[] | TagUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWalletInput | TagCreateOrConnectWithoutWalletInput[]
    createMany?: TagCreateManyWalletInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type MonthlyTagBudgetCreateNestedManyWithoutWalletInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput> | MonthlyTagBudgetCreateWithoutWalletInput[] | MonthlyTagBudgetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutWalletInput | MonthlyTagBudgetCreateOrConnectWithoutWalletInput[]
    createMany?: MonthlyTagBudgetCreateManyWalletInputEnvelope
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput> | PlanCreateWithoutWalletInput[] | PlanUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutWalletInput | PlanCreateOrConnectWithoutWalletInput[]
    createMany?: PlanCreateManyWalletInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput> | GoalCreateWithoutWalletInput[] | GoalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWalletInput | GoalCreateOrConnectWithoutWalletInput[]
    createMany?: GoalCreateManyWalletInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput> | TagCreateWithoutWalletInput[] | TagUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWalletInput | TagCreateOrConnectWithoutWalletInput[]
    createMany?: TagCreateManyWalletInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput> | MonthlyTagBudgetCreateWithoutWalletInput[] | MonthlyTagBudgetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutWalletInput | MonthlyTagBudgetCreateOrConnectWithoutWalletInput[]
    createMany?: MonthlyTagBudgetCreateManyWalletInputEnvelope
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutWalletNestedInput = {
    create?: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput> | PlanCreateWithoutWalletInput[] | PlanUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutWalletInput | PlanCreateOrConnectWithoutWalletInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutWalletInput | PlanUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: PlanCreateManyWalletInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutWalletInput | PlanUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutWalletInput | PlanUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutWalletNestedInput = {
    create?: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput> | GoalCreateWithoutWalletInput[] | GoalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWalletInput | GoalCreateOrConnectWithoutWalletInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutWalletInput | GoalUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: GoalCreateManyWalletInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutWalletInput | GoalUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutWalletInput | GoalUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TagUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput> | TagCreateWithoutWalletInput[] | TagUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWalletInput | TagCreateOrConnectWithoutWalletInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutWalletInput | TagUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TagCreateManyWalletInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutWalletInput | TagUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TagUpdateManyWithWhereWithoutWalletInput | TagUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type MonthlyTagBudgetUpdateManyWithoutWalletNestedInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput> | MonthlyTagBudgetCreateWithoutWalletInput[] | MonthlyTagBudgetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutWalletInput | MonthlyTagBudgetCreateOrConnectWithoutWalletInput[]
    upsert?: MonthlyTagBudgetUpsertWithWhereUniqueWithoutWalletInput | MonthlyTagBudgetUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: MonthlyTagBudgetCreateManyWalletInputEnvelope
    set?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    disconnect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    delete?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    update?: MonthlyTagBudgetUpdateWithWhereUniqueWithoutWalletInput | MonthlyTagBudgetUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: MonthlyTagBudgetUpdateManyWithWhereWithoutWalletInput | MonthlyTagBudgetUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput> | PlanCreateWithoutWalletInput[] | PlanUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutWalletInput | PlanCreateOrConnectWithoutWalletInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutWalletInput | PlanUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: PlanCreateManyWalletInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutWalletInput | PlanUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutWalletInput | PlanUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput> | GoalCreateWithoutWalletInput[] | GoalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWalletInput | GoalCreateOrConnectWithoutWalletInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutWalletInput | GoalUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: GoalCreateManyWalletInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutWalletInput | GoalUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutWalletInput | GoalUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput> | TagCreateWithoutWalletInput[] | TagUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWalletInput | TagCreateOrConnectWithoutWalletInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutWalletInput | TagUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TagCreateManyWalletInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutWalletInput | TagUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TagUpdateManyWithWhereWithoutWalletInput | TagUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput> | MonthlyTagBudgetCreateWithoutWalletInput[] | MonthlyTagBudgetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutWalletInput | MonthlyTagBudgetCreateOrConnectWithoutWalletInput[]
    upsert?: MonthlyTagBudgetUpsertWithWhereUniqueWithoutWalletInput | MonthlyTagBudgetUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: MonthlyTagBudgetCreateManyWalletInputEnvelope
    set?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    disconnect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    delete?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    update?: MonthlyTagBudgetUpdateWithWhereUniqueWithoutWalletInput | MonthlyTagBudgetUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: MonthlyTagBudgetUpdateManyWithWhereWithoutWalletInput | MonthlyTagBudgetUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput> | PlanCreateWithoutCategoryInput[] | PlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCategoryInput | PlanCreateOrConnectWithoutCategoryInput[]
    createMany?: PlanCreateManyCategoryInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput> | PlanCreateWithoutCategoryInput[] | PlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCategoryInput | PlanCreateOrConnectWithoutCategoryInput[]
    createMany?: PlanCreateManyCategoryInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput> | PlanCreateWithoutCategoryInput[] | PlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCategoryInput | PlanCreateOrConnectWithoutCategoryInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutCategoryInput | PlanUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlanCreateManyCategoryInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutCategoryInput | PlanUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutCategoryInput | PlanUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput> | PlanCreateWithoutCategoryInput[] | PlanUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCategoryInput | PlanCreateOrConnectWithoutCategoryInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutCategoryInput | PlanUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlanCreateManyCategoryInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutCategoryInput | PlanUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutCategoryInput | PlanUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PlanCreateWithoutTransactionsInput, PlanUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTransactionsInput
    connect?: PlanWhereUniqueInput
  }

  export type GoalAllocationCreateNestedManyWithoutTransactionInput = {
    create?: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput> | GoalAllocationCreateWithoutTransactionInput[] | GoalAllocationUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutTransactionInput | GoalAllocationCreateOrConnectWithoutTransactionInput[]
    createMany?: GoalAllocationCreateManyTransactionInputEnvelope
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
  }

  export type TransactionTagCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput> | TransactionTagCreateWithoutTransactionInput[] | TransactionTagUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTransactionInput | TransactionTagCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionTagCreateManyTransactionInputEnvelope
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
  }

  export type GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput> | GoalAllocationCreateWithoutTransactionInput[] | GoalAllocationUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutTransactionInput | GoalAllocationCreateOrConnectWithoutTransactionInput[]
    createMany?: GoalAllocationCreateManyTransactionInputEnvelope
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
  }

  export type TransactionTagUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput> | TransactionTagCreateWithoutTransactionInput[] | TransactionTagUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTransactionInput | TransactionTagCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionTagCreateManyTransactionInputEnvelope
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    upsert?: WalletUpsertWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTransactionsInput, WalletUpdateWithoutTransactionsInput>, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type PlanUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<PlanCreateWithoutTransactionsInput, PlanUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTransactionsInput
    upsert?: PlanUpsertWithoutTransactionsInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutTransactionsInput, PlanUpdateWithoutTransactionsInput>, PlanUncheckedUpdateWithoutTransactionsInput>
  }

  export type GoalAllocationUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput> | GoalAllocationCreateWithoutTransactionInput[] | GoalAllocationUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutTransactionInput | GoalAllocationCreateOrConnectWithoutTransactionInput[]
    upsert?: GoalAllocationUpsertWithWhereUniqueWithoutTransactionInput | GoalAllocationUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: GoalAllocationCreateManyTransactionInputEnvelope
    set?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    disconnect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    delete?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    update?: GoalAllocationUpdateWithWhereUniqueWithoutTransactionInput | GoalAllocationUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: GoalAllocationUpdateManyWithWhereWithoutTransactionInput | GoalAllocationUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
  }

  export type TransactionTagUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput> | TransactionTagCreateWithoutTransactionInput[] | TransactionTagUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTransactionInput | TransactionTagCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionTagUpsertWithWhereUniqueWithoutTransactionInput | TransactionTagUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionTagCreateManyTransactionInputEnvelope
    set?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    disconnect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    delete?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    update?: TransactionTagUpdateWithWhereUniqueWithoutTransactionInput | TransactionTagUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionTagUpdateManyWithWhereWithoutTransactionInput | TransactionTagUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
  }

  export type GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput> | GoalAllocationCreateWithoutTransactionInput[] | GoalAllocationUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutTransactionInput | GoalAllocationCreateOrConnectWithoutTransactionInput[]
    upsert?: GoalAllocationUpsertWithWhereUniqueWithoutTransactionInput | GoalAllocationUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: GoalAllocationCreateManyTransactionInputEnvelope
    set?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    disconnect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    delete?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    update?: GoalAllocationUpdateWithWhereUniqueWithoutTransactionInput | GoalAllocationUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: GoalAllocationUpdateManyWithWhereWithoutTransactionInput | GoalAllocationUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
  }

  export type TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput> | TransactionTagCreateWithoutTransactionInput[] | TransactionTagUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTransactionInput | TransactionTagCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionTagUpsertWithWhereUniqueWithoutTransactionInput | TransactionTagUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionTagCreateManyTransactionInputEnvelope
    set?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    disconnect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    delete?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    update?: TransactionTagUpdateWithWhereUniqueWithoutTransactionInput | TransactionTagUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionTagUpdateManyWithWhereWithoutTransactionInput | TransactionTagUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutTagsInput = {
    create?: XOR<WalletCreateWithoutTagsInput, WalletUncheckedCreateWithoutTagsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTagsInput
    connect?: WalletWhereUniqueInput
  }

  export type TransactionTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput> | TransactionTagCreateWithoutTagInput[] | TransactionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTagInput | TransactionTagCreateOrConnectWithoutTagInput[]
    createMany?: TransactionTagCreateManyTagInputEnvelope
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
  }

  export type PlanTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type MonthlyTagBudgetCreateNestedManyWithoutTagInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput> | MonthlyTagBudgetCreateWithoutTagInput[] | MonthlyTagBudgetUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutTagInput | MonthlyTagBudgetCreateOrConnectWithoutTagInput[]
    createMany?: MonthlyTagBudgetCreateManyTagInputEnvelope
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
  }

  export type TransactionTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput> | TransactionTagCreateWithoutTagInput[] | TransactionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTagInput | TransactionTagCreateOrConnectWithoutTagInput[]
    createMany?: TransactionTagCreateManyTagInputEnvelope
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
  }

  export type PlanTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type MonthlyTagBudgetUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput> | MonthlyTagBudgetCreateWithoutTagInput[] | MonthlyTagBudgetUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutTagInput | MonthlyTagBudgetCreateOrConnectWithoutTagInput[]
    createMany?: MonthlyTagBudgetCreateManyTagInputEnvelope
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WalletUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<WalletCreateWithoutTagsInput, WalletUncheckedCreateWithoutTagsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTagsInput
    upsert?: WalletUpsertWithoutTagsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTagsInput, WalletUpdateWithoutTagsInput>, WalletUncheckedUpdateWithoutTagsInput>
  }

  export type TransactionTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput> | TransactionTagCreateWithoutTagInput[] | TransactionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTagInput | TransactionTagCreateOrConnectWithoutTagInput[]
    upsert?: TransactionTagUpsertWithWhereUniqueWithoutTagInput | TransactionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TransactionTagCreateManyTagInputEnvelope
    set?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    disconnect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    delete?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    update?: TransactionTagUpdateWithWhereUniqueWithoutTagInput | TransactionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TransactionTagUpdateManyWithWhereWithoutTagInput | TransactionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
  }

  export type PlanTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutTagInput | PlanTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutTagInput | PlanTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutTagInput | PlanTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type MonthlyTagBudgetUpdateManyWithoutTagNestedInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput> | MonthlyTagBudgetCreateWithoutTagInput[] | MonthlyTagBudgetUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutTagInput | MonthlyTagBudgetCreateOrConnectWithoutTagInput[]
    upsert?: MonthlyTagBudgetUpsertWithWhereUniqueWithoutTagInput | MonthlyTagBudgetUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MonthlyTagBudgetCreateManyTagInputEnvelope
    set?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    disconnect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    delete?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    update?: MonthlyTagBudgetUpdateWithWhereUniqueWithoutTagInput | MonthlyTagBudgetUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MonthlyTagBudgetUpdateManyWithWhereWithoutTagInput | MonthlyTagBudgetUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
  }

  export type TransactionTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput> | TransactionTagCreateWithoutTagInput[] | TransactionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TransactionTagCreateOrConnectWithoutTagInput | TransactionTagCreateOrConnectWithoutTagInput[]
    upsert?: TransactionTagUpsertWithWhereUniqueWithoutTagInput | TransactionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TransactionTagCreateManyTagInputEnvelope
    set?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    disconnect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    delete?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    connect?: TransactionTagWhereUniqueInput | TransactionTagWhereUniqueInput[]
    update?: TransactionTagUpdateWithWhereUniqueWithoutTagInput | TransactionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TransactionTagUpdateManyWithWhereWithoutTagInput | TransactionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
  }

  export type PlanTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput> | PlanTagCreateWithoutTagInput[] | PlanTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutTagInput | PlanTagCreateOrConnectWithoutTagInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutTagInput | PlanTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PlanTagCreateManyTagInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutTagInput | PlanTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutTagInput | PlanTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type MonthlyTagBudgetUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput> | MonthlyTagBudgetCreateWithoutTagInput[] | MonthlyTagBudgetUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MonthlyTagBudgetCreateOrConnectWithoutTagInput | MonthlyTagBudgetCreateOrConnectWithoutTagInput[]
    upsert?: MonthlyTagBudgetUpsertWithWhereUniqueWithoutTagInput | MonthlyTagBudgetUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MonthlyTagBudgetCreateManyTagInputEnvelope
    set?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    disconnect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    delete?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    connect?: MonthlyTagBudgetWhereUniqueInput | MonthlyTagBudgetWhereUniqueInput[]
    update?: MonthlyTagBudgetUpdateWithWhereUniqueWithoutTagInput | MonthlyTagBudgetUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MonthlyTagBudgetUpdateManyWithWhereWithoutTagInput | MonthlyTagBudgetUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutTagsInput = {
    create?: XOR<TransactionCreateWithoutTagsInput, TransactionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTagsInput
    connect?: TransactionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TagCreateWithoutTransactionsInput, TagUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTransactionsInput
    connect?: TagWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TransactionCreateWithoutTagsInput, TransactionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutTagsInput
    upsert?: TransactionUpsertWithoutTagsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutTagsInput, TransactionUpdateWithoutTagsInput>, TransactionUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TagCreateWithoutTransactionsInput, TagUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTransactionsInput
    upsert?: TagUpsertWithoutTransactionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTransactionsInput, TagUpdateWithoutTransactionsInput>, TagUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletCreateNestedOneWithoutTagBudgetsInput = {
    create?: XOR<WalletCreateWithoutTagBudgetsInput, WalletUncheckedCreateWithoutTagBudgetsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTagBudgetsInput
    connect?: WalletWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<TagCreateWithoutBudgetsInput, TagUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: TagCreateOrConnectWithoutBudgetsInput
    connect?: TagWhereUniqueInput
  }

  export type WalletUpdateOneRequiredWithoutTagBudgetsNestedInput = {
    create?: XOR<WalletCreateWithoutTagBudgetsInput, WalletUncheckedCreateWithoutTagBudgetsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTagBudgetsInput
    upsert?: WalletUpsertWithoutTagBudgetsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTagBudgetsInput, WalletUpdateWithoutTagBudgetsInput>, WalletUncheckedUpdateWithoutTagBudgetsInput>
  }

  export type TagUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<TagCreateWithoutBudgetsInput, TagUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: TagCreateOrConnectWithoutBudgetsInput
    upsert?: TagUpsertWithoutBudgetsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBudgetsInput, TagUpdateWithoutBudgetsInput>, TagUncheckedUpdateWithoutBudgetsInput>
  }

  export type WalletCreateNestedOneWithoutPlansInput = {
    create?: XOR<WalletCreateWithoutPlansInput, WalletUncheckedCreateWithoutPlansInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlansInput
    connect?: WalletWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPlansInput = {
    create?: XOR<CategoryCreateWithoutPlansInput, CategoryUncheckedCreateWithoutPlansInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlansInput
    connect?: CategoryWhereUniqueInput
  }

  export type PlanOccurrenceCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput> | PlanOccurrenceCreateWithoutPlanInput[] | PlanOccurrenceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanOccurrenceCreateOrConnectWithoutPlanInput | PlanOccurrenceCreateOrConnectWithoutPlanInput[]
    createMany?: PlanOccurrenceCreateManyPlanInputEnvelope
    connect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSourcePlanInput = {
    create?: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput> | TransactionCreateWithoutSourcePlanInput[] | TransactionUncheckedCreateWithoutSourcePlanInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSourcePlanInput | TransactionCreateOrConnectWithoutSourcePlanInput[]
    createMany?: TransactionCreateManySourcePlanInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanTagCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput> | PlanTagCreateWithoutPlanInput[] | PlanTagUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutPlanInput | PlanTagCreateOrConnectWithoutPlanInput[]
    createMany?: PlanTagCreateManyPlanInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput> | PlanOccurrenceCreateWithoutPlanInput[] | PlanOccurrenceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanOccurrenceCreateOrConnectWithoutPlanInput | PlanOccurrenceCreateOrConnectWithoutPlanInput[]
    createMany?: PlanOccurrenceCreateManyPlanInputEnvelope
    connect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSourcePlanInput = {
    create?: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput> | TransactionCreateWithoutSourcePlanInput[] | TransactionUncheckedCreateWithoutSourcePlanInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSourcePlanInput | TransactionCreateOrConnectWithoutSourcePlanInput[]
    createMany?: TransactionCreateManySourcePlanInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PlanTagUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput> | PlanTagCreateWithoutPlanInput[] | PlanTagUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutPlanInput | PlanTagCreateOrConnectWithoutPlanInput[]
    createMany?: PlanTagCreateManyPlanInputEnvelope
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type NullableEnumRecurrenceUnitFieldUpdateOperationsInput = {
    set?: $Enums.RecurrenceUnit | null
  }

  export type WalletUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<WalletCreateWithoutPlansInput, WalletUncheckedCreateWithoutPlansInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlansInput
    upsert?: WalletUpsertWithoutPlansInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutPlansInput, WalletUpdateWithoutPlansInput>, WalletUncheckedUpdateWithoutPlansInput>
  }

  export type CategoryUpdateOneWithoutPlansNestedInput = {
    create?: XOR<CategoryCreateWithoutPlansInput, CategoryUncheckedCreateWithoutPlansInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlansInput
    upsert?: CategoryUpsertWithoutPlansInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPlansInput, CategoryUpdateWithoutPlansInput>, CategoryUncheckedUpdateWithoutPlansInput>
  }

  export type PlanOccurrenceUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput> | PlanOccurrenceCreateWithoutPlanInput[] | PlanOccurrenceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanOccurrenceCreateOrConnectWithoutPlanInput | PlanOccurrenceCreateOrConnectWithoutPlanInput[]
    upsert?: PlanOccurrenceUpsertWithWhereUniqueWithoutPlanInput | PlanOccurrenceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanOccurrenceCreateManyPlanInputEnvelope
    set?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    disconnect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    delete?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    connect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    update?: PlanOccurrenceUpdateWithWhereUniqueWithoutPlanInput | PlanOccurrenceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanOccurrenceUpdateManyWithWhereWithoutPlanInput | PlanOccurrenceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanOccurrenceScalarWhereInput | PlanOccurrenceScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSourcePlanNestedInput = {
    create?: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput> | TransactionCreateWithoutSourcePlanInput[] | TransactionUncheckedCreateWithoutSourcePlanInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSourcePlanInput | TransactionCreateOrConnectWithoutSourcePlanInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSourcePlanInput | TransactionUpsertWithWhereUniqueWithoutSourcePlanInput[]
    createMany?: TransactionCreateManySourcePlanInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSourcePlanInput | TransactionUpdateWithWhereUniqueWithoutSourcePlanInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSourcePlanInput | TransactionUpdateManyWithWhereWithoutSourcePlanInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanTagUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput> | PlanTagCreateWithoutPlanInput[] | PlanTagUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutPlanInput | PlanTagCreateOrConnectWithoutPlanInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutPlanInput | PlanTagUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanTagCreateManyPlanInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutPlanInput | PlanTagUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutPlanInput | PlanTagUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput> | PlanOccurrenceCreateWithoutPlanInput[] | PlanOccurrenceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanOccurrenceCreateOrConnectWithoutPlanInput | PlanOccurrenceCreateOrConnectWithoutPlanInput[]
    upsert?: PlanOccurrenceUpsertWithWhereUniqueWithoutPlanInput | PlanOccurrenceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanOccurrenceCreateManyPlanInputEnvelope
    set?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    disconnect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    delete?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    connect?: PlanOccurrenceWhereUniqueInput | PlanOccurrenceWhereUniqueInput[]
    update?: PlanOccurrenceUpdateWithWhereUniqueWithoutPlanInput | PlanOccurrenceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanOccurrenceUpdateManyWithWhereWithoutPlanInput | PlanOccurrenceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanOccurrenceScalarWhereInput | PlanOccurrenceScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput = {
    create?: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput> | TransactionCreateWithoutSourcePlanInput[] | TransactionUncheckedCreateWithoutSourcePlanInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSourcePlanInput | TransactionCreateOrConnectWithoutSourcePlanInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSourcePlanInput | TransactionUpsertWithWhereUniqueWithoutSourcePlanInput[]
    createMany?: TransactionCreateManySourcePlanInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSourcePlanInput | TransactionUpdateWithWhereUniqueWithoutSourcePlanInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSourcePlanInput | TransactionUpdateManyWithWhereWithoutSourcePlanInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PlanTagUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput> | PlanTagCreateWithoutPlanInput[] | PlanTagUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanTagCreateOrConnectWithoutPlanInput | PlanTagCreateOrConnectWithoutPlanInput[]
    upsert?: PlanTagUpsertWithWhereUniqueWithoutPlanInput | PlanTagUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanTagCreateManyPlanInputEnvelope
    set?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    disconnect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    delete?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    connect?: PlanTagWhereUniqueInput | PlanTagWhereUniqueInput[]
    update?: PlanTagUpdateWithWhereUniqueWithoutPlanInput | PlanTagUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanTagUpdateManyWithWhereWithoutPlanInput | PlanTagUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutTagsInput = {
    create?: XOR<PlanCreateWithoutTagsInput, PlanUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTagsInput
    connect?: PlanWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPlansInput = {
    create?: XOR<TagCreateWithoutPlansInput, TagUncheckedCreateWithoutPlansInput>
    connectOrCreate?: TagCreateOrConnectWithoutPlansInput
    connect?: TagWhereUniqueInput
  }

  export type PlanUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PlanCreateWithoutTagsInput, PlanUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTagsInput
    upsert?: PlanUpsertWithoutTagsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutTagsInput, PlanUpdateWithoutTagsInput>, PlanUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<TagCreateWithoutPlansInput, TagUncheckedCreateWithoutPlansInput>
    connectOrCreate?: TagCreateOrConnectWithoutPlansInput
    upsert?: TagUpsertWithoutPlansInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPlansInput, TagUpdateWithoutPlansInput>, TagUncheckedUpdateWithoutPlansInput>
  }

  export type PlanCreateNestedOneWithoutOccurrencesInput = {
    create?: XOR<PlanCreateWithoutOccurrencesInput, PlanUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutOccurrencesInput
    connect?: PlanWhereUniqueInput
  }

  export type PlanUpdateOneRequiredWithoutOccurrencesNestedInput = {
    create?: XOR<PlanCreateWithoutOccurrencesInput, PlanUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutOccurrencesInput
    upsert?: PlanUpsertWithoutOccurrencesInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutOccurrencesInput, PlanUpdateWithoutOccurrencesInput>, PlanUncheckedUpdateWithoutOccurrencesInput>
  }

  export type WalletCreateNestedOneWithoutGoalsInput = {
    create?: XOR<WalletCreateWithoutGoalsInput, WalletUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutGoalsInput
    connect?: WalletWhereUniqueInput
  }

  export type GoalAllocationCreateNestedManyWithoutGoalInput = {
    create?: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput> | GoalAllocationCreateWithoutGoalInput[] | GoalAllocationUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutGoalInput | GoalAllocationCreateOrConnectWithoutGoalInput[]
    createMany?: GoalAllocationCreateManyGoalInputEnvelope
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
  }

  export type GoalAllocationUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput> | GoalAllocationCreateWithoutGoalInput[] | GoalAllocationUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutGoalInput | GoalAllocationCreateOrConnectWithoutGoalInput[]
    createMany?: GoalAllocationCreateManyGoalInputEnvelope
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
  }

  export type WalletUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<WalletCreateWithoutGoalsInput, WalletUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutGoalsInput
    upsert?: WalletUpsertWithoutGoalsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutGoalsInput, WalletUpdateWithoutGoalsInput>, WalletUncheckedUpdateWithoutGoalsInput>
  }

  export type GoalAllocationUpdateManyWithoutGoalNestedInput = {
    create?: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput> | GoalAllocationCreateWithoutGoalInput[] | GoalAllocationUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutGoalInput | GoalAllocationCreateOrConnectWithoutGoalInput[]
    upsert?: GoalAllocationUpsertWithWhereUniqueWithoutGoalInput | GoalAllocationUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: GoalAllocationCreateManyGoalInputEnvelope
    set?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    disconnect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    delete?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    update?: GoalAllocationUpdateWithWhereUniqueWithoutGoalInput | GoalAllocationUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: GoalAllocationUpdateManyWithWhereWithoutGoalInput | GoalAllocationUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
  }

  export type GoalAllocationUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput> | GoalAllocationCreateWithoutGoalInput[] | GoalAllocationUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalAllocationCreateOrConnectWithoutGoalInput | GoalAllocationCreateOrConnectWithoutGoalInput[]
    upsert?: GoalAllocationUpsertWithWhereUniqueWithoutGoalInput | GoalAllocationUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: GoalAllocationCreateManyGoalInputEnvelope
    set?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    disconnect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    delete?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    connect?: GoalAllocationWhereUniqueInput | GoalAllocationWhereUniqueInput[]
    update?: GoalAllocationUpdateWithWhereUniqueWithoutGoalInput | GoalAllocationUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: GoalAllocationUpdateManyWithWhereWithoutGoalInput | GoalAllocationUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<GoalCreateWithoutAllocationsInput, GoalUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutAllocationsInput
    connect?: GoalWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutGoalAllocationsInput = {
    create?: XOR<TransactionCreateWithoutGoalAllocationsInput, TransactionUncheckedCreateWithoutGoalAllocationsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutGoalAllocationsInput
    connect?: TransactionWhereUniqueInput
  }

  export type GoalUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: XOR<GoalCreateWithoutAllocationsInput, GoalUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutAllocationsInput
    upsert?: GoalUpsertWithoutAllocationsInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutAllocationsInput, GoalUpdateWithoutAllocationsInput>, GoalUncheckedUpdateWithoutAllocationsInput>
  }

  export type TransactionUpdateOneWithoutGoalAllocationsNestedInput = {
    create?: XOR<TransactionCreateWithoutGoalAllocationsInput, TransactionUncheckedCreateWithoutGoalAllocationsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutGoalAllocationsInput
    upsert?: TransactionUpsertWithoutGoalAllocationsInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutGoalAllocationsInput, TransactionUpdateWithoutGoalAllocationsInput>, TransactionUncheckedUpdateWithoutGoalAllocationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[]
    notIn?: $Enums.PlanType[]
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumRecurrenceUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceUnit | EnumRecurrenceUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurrenceUnit[] | null
    notIn?: $Enums.RecurrenceUnit[] | null
    not?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel> | $Enums.RecurrenceUnit | null
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[]
    notIn?: $Enums.PlanType[]
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumRecurrenceUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceUnit | EnumRecurrenceUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurrenceUnit[] | null
    notIn?: $Enums.RecurrenceUnit[] | null
    not?: NestedEnumRecurrenceUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceUnitNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutWalletInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sourcePlan?: PlanCreateNestedOneWithoutTransactionsInput
    goalAllocations?: GoalAllocationCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goalAllocations?: GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[]
  }

  export type PlanCreateWithoutWalletInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPlansInput
    occurrences?: PlanOccurrenceCreateNestedManyWithoutPlanInput
    transactions?: TransactionCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutWalletInput = {
    id?: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    occurrences?: PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutWalletInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput>
  }

  export type PlanCreateManyWalletInputEnvelope = {
    data: PlanCreateManyWalletInput | PlanCreateManyWalletInput[]
  }

  export type GoalCreateWithoutWalletInput = {
    id?: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: GoalAllocationCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: GoalAllocationUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutWalletInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput>
  }

  export type GoalCreateManyWalletInputEnvelope = {
    data: GoalCreateManyWalletInput | GoalCreateManyWalletInput[]
  }

  export type TagCreateWithoutWalletInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionTagCreateNestedManyWithoutTagInput
    plans?: PlanTagCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionTagUncheckedCreateNestedManyWithoutTagInput
    plans?: PlanTagUncheckedCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutWalletInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput>
  }

  export type TagCreateManyWalletInputEnvelope = {
    data: TagCreateManyWalletInput | TagCreateManyWalletInput[]
  }

  export type MonthlyTagBudgetCreateWithoutWalletInput = {
    id?: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutBudgetsInput
  }

  export type MonthlyTagBudgetUncheckedCreateWithoutWalletInput = {
    id?: string
    tagId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyTagBudgetCreateOrConnectWithoutWalletInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    create: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput>
  }

  export type MonthlyTagBudgetCreateManyWalletInputEnvelope = {
    data: MonthlyTagBudgetCreateManyWalletInput | MonthlyTagBudgetCreateManyWalletInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    description?: StringNullableFilter<"Transaction"> | string | null
    amountCents?: IntFilter<"Transaction"> | number
    dueDate?: DateTimeFilter<"Transaction"> | Date | string
    settlementDueDate?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    sourcePlanId?: StringNullableFilter<"Transaction"> | string | null
    installmentIndex?: IntNullableFilter<"Transaction"> | number | null
    installmentTotal?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type PlanUpsertWithWhereUniqueWithoutWalletInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutWalletInput, PlanUncheckedUpdateWithoutWalletInput>
    create: XOR<PlanCreateWithoutWalletInput, PlanUncheckedCreateWithoutWalletInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutWalletInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutWalletInput, PlanUncheckedUpdateWithoutWalletInput>
  }

  export type PlanUpdateManyWithWhereWithoutWalletInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutWalletInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    walletId?: StringFilter<"Plan"> | string
    categoryId?: StringNullableFilter<"Plan"> | string | null
    type?: EnumPlanTypeFilter<"Plan"> | $Enums.PlanType
    transactionType?: EnumTransactionTypeFilter<"Plan"> | $Enums.TransactionType
    description?: StringNullableFilter<"Plan"> | string | null
    amountCents?: IntFilter<"Plan"> | number
    startDate?: DateTimeFilter<"Plan"> | Date | string
    endDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    intervalValue?: IntFilter<"Plan"> | number
    recurrenceUnit?: EnumRecurrenceUnitNullableFilter<"Plan"> | $Enums.RecurrenceUnit | null
    installments?: IntNullableFilter<"Plan"> | number | null
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutWalletInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutWalletInput, GoalUncheckedUpdateWithoutWalletInput>
    create: XOR<GoalCreateWithoutWalletInput, GoalUncheckedCreateWithoutWalletInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutWalletInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutWalletInput, GoalUncheckedUpdateWithoutWalletInput>
  }

  export type GoalUpdateManyWithWhereWithoutWalletInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutWalletInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    walletId?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    targetCents?: IntFilter<"Goal"> | number
    initialAmountCents?: IntFilter<"Goal"> | number
    participantCount?: IntFilter<"Goal"> | number
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutWalletInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutWalletInput, TagUncheckedUpdateWithoutWalletInput>
    create: XOR<TagCreateWithoutWalletInput, TagUncheckedCreateWithoutWalletInput>
  }

  export type TagUpdateWithWhereUniqueWithoutWalletInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutWalletInput, TagUncheckedUpdateWithoutWalletInput>
  }

  export type TagUpdateManyWithWhereWithoutWalletInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutWalletInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    walletId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    isArchived?: BoolFilter<"Tag"> | boolean
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type MonthlyTagBudgetUpsertWithWhereUniqueWithoutWalletInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    update: XOR<MonthlyTagBudgetUpdateWithoutWalletInput, MonthlyTagBudgetUncheckedUpdateWithoutWalletInput>
    create: XOR<MonthlyTagBudgetCreateWithoutWalletInput, MonthlyTagBudgetUncheckedCreateWithoutWalletInput>
  }

  export type MonthlyTagBudgetUpdateWithWhereUniqueWithoutWalletInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    data: XOR<MonthlyTagBudgetUpdateWithoutWalletInput, MonthlyTagBudgetUncheckedUpdateWithoutWalletInput>
  }

  export type MonthlyTagBudgetUpdateManyWithWhereWithoutWalletInput = {
    where: MonthlyTagBudgetScalarWhereInput
    data: XOR<MonthlyTagBudgetUpdateManyMutationInput, MonthlyTagBudgetUncheckedUpdateManyWithoutWalletInput>
  }

  export type MonthlyTagBudgetScalarWhereInput = {
    AND?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
    OR?: MonthlyTagBudgetScalarWhereInput[]
    NOT?: MonthlyTagBudgetScalarWhereInput | MonthlyTagBudgetScalarWhereInput[]
    id?: StringFilter<"MonthlyTagBudget"> | string
    walletId?: StringFilter<"MonthlyTagBudget"> | string
    tagId?: StringFilter<"MonthlyTagBudget"> | string
    monthKey?: StringFilter<"MonthlyTagBudget"> | string
    limitCents?: IntFilter<"MonthlyTagBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyTagBudget"> | Date | string
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    sourcePlan?: PlanCreateNestedOneWithoutTransactionsInput
    goalAllocations?: GoalAllocationCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    walletId: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goalAllocations?: GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
  }

  export type PlanCreateWithoutCategoryInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPlansInput
    occurrences?: PlanOccurrenceCreateNestedManyWithoutPlanInput
    transactions?: TransactionCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutCategoryInput = {
    id?: string
    walletId: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    occurrences?: PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutCategoryInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput>
  }

  export type PlanCreateManyCategoryInputEnvelope = {
    data: PlanCreateManyCategoryInput | PlanCreateManyCategoryInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PlanUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutCategoryInput, PlanUncheckedUpdateWithoutCategoryInput>
    create: XOR<PlanCreateWithoutCategoryInput, PlanUncheckedCreateWithoutCategoryInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutCategoryInput, PlanUncheckedUpdateWithoutCategoryInput>
  }

  export type PlanUpdateManyWithWhereWithoutCategoryInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutCategoryInput>
  }

  export type WalletCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutWalletInput
    goals?: GoalCreateNestedManyWithoutWalletInput
    tags?: TagCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutWalletInput
    goals?: GoalUncheckedCreateNestedManyWithoutWalletInput
    tags?: TagUncheckedCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type PlanCreateWithoutTransactionsInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPlansInput
    category?: CategoryCreateNestedOneWithoutPlansInput
    occurrences?: PlanOccurrenceCreateNestedManyWithoutPlanInput
    tags?: PlanTagCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutTransactionsInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    occurrences?: PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput
    tags?: PlanTagUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutTransactionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutTransactionsInput, PlanUncheckedCreateWithoutTransactionsInput>
  }

  export type GoalAllocationCreateWithoutTransactionInput = {
    id?: string
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
    goal: GoalCreateNestedOneWithoutAllocationsInput
  }

  export type GoalAllocationUncheckedCreateWithoutTransactionInput = {
    id?: string
    goalId: string
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type GoalAllocationCreateOrConnectWithoutTransactionInput = {
    where: GoalAllocationWhereUniqueInput
    create: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput>
  }

  export type GoalAllocationCreateManyTransactionInputEnvelope = {
    data: GoalAllocationCreateManyTransactionInput | GoalAllocationCreateManyTransactionInput[]
  }

  export type TransactionTagCreateWithoutTransactionInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTagUncheckedCreateWithoutTransactionInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type TransactionTagCreateOrConnectWithoutTransactionInput = {
    where: TransactionTagWhereUniqueInput
    create: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionTagCreateManyTransactionInputEnvelope = {
    data: TransactionTagCreateManyTransactionInput | TransactionTagCreateManyTransactionInput[]
  }

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutWalletNestedInput
    goals?: GoalUpdateManyWithoutWalletNestedInput
    tags?: TagUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutWalletNestedInput
    goals?: GoalUncheckedUpdateManyWithoutWalletNestedInput
    tags?: TagUncheckedUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PlanUpsertWithoutTransactionsInput = {
    update: XOR<PlanUpdateWithoutTransactionsInput, PlanUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PlanCreateWithoutTransactionsInput, PlanUncheckedCreateWithoutTransactionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutTransactionsInput, PlanUncheckedUpdateWithoutTransactionsInput>
  }

  export type PlanUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPlansNestedInput
    category?: CategoryUpdateOneWithoutPlansNestedInput
    occurrences?: PlanOccurrenceUpdateManyWithoutPlanNestedInput
    tags?: PlanTagUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    occurrences?: PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput
    tags?: PlanTagUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type GoalAllocationUpsertWithWhereUniqueWithoutTransactionInput = {
    where: GoalAllocationWhereUniqueInput
    update: XOR<GoalAllocationUpdateWithoutTransactionInput, GoalAllocationUncheckedUpdateWithoutTransactionInput>
    create: XOR<GoalAllocationCreateWithoutTransactionInput, GoalAllocationUncheckedCreateWithoutTransactionInput>
  }

  export type GoalAllocationUpdateWithWhereUniqueWithoutTransactionInput = {
    where: GoalAllocationWhereUniqueInput
    data: XOR<GoalAllocationUpdateWithoutTransactionInput, GoalAllocationUncheckedUpdateWithoutTransactionInput>
  }

  export type GoalAllocationUpdateManyWithWhereWithoutTransactionInput = {
    where: GoalAllocationScalarWhereInput
    data: XOR<GoalAllocationUpdateManyMutationInput, GoalAllocationUncheckedUpdateManyWithoutTransactionInput>
  }

  export type GoalAllocationScalarWhereInput = {
    AND?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
    OR?: GoalAllocationScalarWhereInput[]
    NOT?: GoalAllocationScalarWhereInput | GoalAllocationScalarWhereInput[]
    id?: StringFilter<"GoalAllocation"> | string
    goalId?: StringFilter<"GoalAllocation"> | string
    transactionId?: StringNullableFilter<"GoalAllocation"> | string | null
    amountCents?: IntFilter<"GoalAllocation"> | number
    allocatedAt?: DateTimeFilter<"GoalAllocation"> | Date | string
    note?: StringNullableFilter<"GoalAllocation"> | string | null
  }

  export type TransactionTagUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionTagWhereUniqueInput
    update: XOR<TransactionTagUpdateWithoutTransactionInput, TransactionTagUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionTagCreateWithoutTransactionInput, TransactionTagUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionTagUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionTagWhereUniqueInput
    data: XOR<TransactionTagUpdateWithoutTransactionInput, TransactionTagUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionTagUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionTagScalarWhereInput
    data: XOR<TransactionTagUpdateManyMutationInput, TransactionTagUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionTagScalarWhereInput = {
    AND?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
    OR?: TransactionTagScalarWhereInput[]
    NOT?: TransactionTagScalarWhereInput | TransactionTagScalarWhereInput[]
    transactionId?: StringFilter<"TransactionTag"> | string
    tagId?: StringFilter<"TransactionTag"> | string
    createdAt?: DateTimeFilter<"TransactionTag"> | Date | string
  }

  export type WalletCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    plans?: PlanCreateNestedManyWithoutWalletInput
    goals?: GoalCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    plans?: PlanUncheckedCreateNestedManyWithoutWalletInput
    goals?: GoalUncheckedCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutTagsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTagsInput, WalletUncheckedCreateWithoutTagsInput>
  }

  export type TransactionTagCreateWithoutTagInput = {
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutTagsInput
  }

  export type TransactionTagUncheckedCreateWithoutTagInput = {
    transactionId: string
    createdAt?: Date | string
  }

  export type TransactionTagCreateOrConnectWithoutTagInput = {
    where: TransactionTagWhereUniqueInput
    create: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput>
  }

  export type TransactionTagCreateManyTagInputEnvelope = {
    data: TransactionTagCreateManyTagInput | TransactionTagCreateManyTagInput[]
  }

  export type PlanTagCreateWithoutTagInput = {
    createdAt?: Date | string
    plan: PlanCreateNestedOneWithoutTagsInput
  }

  export type PlanTagUncheckedCreateWithoutTagInput = {
    planId: string
    createdAt?: Date | string
  }

  export type PlanTagCreateOrConnectWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    create: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput>
  }

  export type PlanTagCreateManyTagInputEnvelope = {
    data: PlanTagCreateManyTagInput | PlanTagCreateManyTagInput[]
  }

  export type MonthlyTagBudgetCreateWithoutTagInput = {
    id?: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagBudgetsInput
  }

  export type MonthlyTagBudgetUncheckedCreateWithoutTagInput = {
    id?: string
    walletId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyTagBudgetCreateOrConnectWithoutTagInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    create: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput>
  }

  export type MonthlyTagBudgetCreateManyTagInputEnvelope = {
    data: MonthlyTagBudgetCreateManyTagInput | MonthlyTagBudgetCreateManyTagInput[]
  }

  export type WalletUpsertWithoutTagsInput = {
    update: XOR<WalletUpdateWithoutTagsInput, WalletUncheckedUpdateWithoutTagsInput>
    create: XOR<WalletCreateWithoutTagsInput, WalletUncheckedCreateWithoutTagsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTagsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTagsInput, WalletUncheckedUpdateWithoutTagsInput>
  }

  export type WalletUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    plans?: PlanUpdateManyWithoutWalletNestedInput
    goals?: GoalUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    plans?: PlanUncheckedUpdateManyWithoutWalletNestedInput
    goals?: GoalUncheckedUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TransactionTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TransactionTagWhereUniqueInput
    update: XOR<TransactionTagUpdateWithoutTagInput, TransactionTagUncheckedUpdateWithoutTagInput>
    create: XOR<TransactionTagCreateWithoutTagInput, TransactionTagUncheckedCreateWithoutTagInput>
  }

  export type TransactionTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TransactionTagWhereUniqueInput
    data: XOR<TransactionTagUpdateWithoutTagInput, TransactionTagUncheckedUpdateWithoutTagInput>
  }

  export type TransactionTagUpdateManyWithWhereWithoutTagInput = {
    where: TransactionTagScalarWhereInput
    data: XOR<TransactionTagUpdateManyMutationInput, TransactionTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PlanTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    update: XOR<PlanTagUpdateWithoutTagInput, PlanTagUncheckedUpdateWithoutTagInput>
    create: XOR<PlanTagCreateWithoutTagInput, PlanTagUncheckedCreateWithoutTagInput>
  }

  export type PlanTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PlanTagWhereUniqueInput
    data: XOR<PlanTagUpdateWithoutTagInput, PlanTagUncheckedUpdateWithoutTagInput>
  }

  export type PlanTagUpdateManyWithWhereWithoutTagInput = {
    where: PlanTagScalarWhereInput
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PlanTagScalarWhereInput = {
    AND?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
    OR?: PlanTagScalarWhereInput[]
    NOT?: PlanTagScalarWhereInput | PlanTagScalarWhereInput[]
    planId?: StringFilter<"PlanTag"> | string
    tagId?: StringFilter<"PlanTag"> | string
    createdAt?: DateTimeFilter<"PlanTag"> | Date | string
  }

  export type MonthlyTagBudgetUpsertWithWhereUniqueWithoutTagInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    update: XOR<MonthlyTagBudgetUpdateWithoutTagInput, MonthlyTagBudgetUncheckedUpdateWithoutTagInput>
    create: XOR<MonthlyTagBudgetCreateWithoutTagInput, MonthlyTagBudgetUncheckedCreateWithoutTagInput>
  }

  export type MonthlyTagBudgetUpdateWithWhereUniqueWithoutTagInput = {
    where: MonthlyTagBudgetWhereUniqueInput
    data: XOR<MonthlyTagBudgetUpdateWithoutTagInput, MonthlyTagBudgetUncheckedUpdateWithoutTagInput>
  }

  export type MonthlyTagBudgetUpdateManyWithWhereWithoutTagInput = {
    where: MonthlyTagBudgetScalarWhereInput
    data: XOR<MonthlyTagBudgetUpdateManyMutationInput, MonthlyTagBudgetUncheckedUpdateManyWithoutTagInput>
  }

  export type TransactionCreateWithoutTagsInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sourcePlan?: PlanCreateNestedOneWithoutTransactionsInput
    goalAllocations?: GoalAllocationCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTagsInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goalAllocations?: GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutTagsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTagsInput, TransactionUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutTransactionsInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagsInput
    plans?: PlanTagCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutTransactionsInput = {
    id?: string
    walletId: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanTagUncheckedCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutTransactionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTransactionsInput, TagUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionUpsertWithoutTagsInput = {
    update: XOR<TransactionUpdateWithoutTagsInput, TransactionUncheckedUpdateWithoutTagsInput>
    create: XOR<TransactionCreateWithoutTagsInput, TransactionUncheckedCreateWithoutTagsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutTagsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutTagsInput, TransactionUncheckedUpdateWithoutTagsInput>
  }

  export type TransactionUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sourcePlan?: PlanUpdateOneWithoutTransactionsNestedInput
    goalAllocations?: GoalAllocationUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAllocations?: GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TagUpsertWithoutTransactionsInput = {
    update: XOR<TagUpdateWithoutTransactionsInput, TagUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TagCreateWithoutTransactionsInput, TagUncheckedCreateWithoutTransactionsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTransactionsInput, TagUncheckedUpdateWithoutTransactionsInput>
  }

  export type TagUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagsNestedInput
    plans?: PlanTagUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutTagNestedInput
  }

  export type WalletCreateWithoutTagBudgetsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    plans?: PlanCreateNestedManyWithoutWalletInput
    goals?: GoalCreateNestedManyWithoutWalletInput
    tags?: TagCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTagBudgetsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    plans?: PlanUncheckedCreateNestedManyWithoutWalletInput
    goals?: GoalUncheckedCreateNestedManyWithoutWalletInput
    tags?: TagUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutTagBudgetsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTagBudgetsInput, WalletUncheckedCreateWithoutTagBudgetsInput>
  }

  export type TagCreateWithoutBudgetsInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagsInput
    transactions?: TransactionTagCreateNestedManyWithoutTagInput
    plans?: PlanTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutBudgetsInput = {
    id?: string
    walletId: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionTagUncheckedCreateNestedManyWithoutTagInput
    plans?: PlanTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutBudgetsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBudgetsInput, TagUncheckedCreateWithoutBudgetsInput>
  }

  export type WalletUpsertWithoutTagBudgetsInput = {
    update: XOR<WalletUpdateWithoutTagBudgetsInput, WalletUncheckedUpdateWithoutTagBudgetsInput>
    create: XOR<WalletCreateWithoutTagBudgetsInput, WalletUncheckedCreateWithoutTagBudgetsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTagBudgetsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTagBudgetsInput, WalletUncheckedUpdateWithoutTagBudgetsInput>
  }

  export type WalletUpdateWithoutTagBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    plans?: PlanUpdateManyWithoutWalletNestedInput
    goals?: GoalUpdateManyWithoutWalletNestedInput
    tags?: TagUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTagBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    plans?: PlanUncheckedUpdateManyWithoutWalletNestedInput
    goals?: GoalUncheckedUpdateManyWithoutWalletNestedInput
    tags?: TagUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TagUpsertWithoutBudgetsInput = {
    update: XOR<TagUpdateWithoutBudgetsInput, TagUncheckedUpdateWithoutBudgetsInput>
    create: XOR<TagCreateWithoutBudgetsInput, TagUncheckedCreateWithoutBudgetsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBudgetsInput, TagUncheckedUpdateWithoutBudgetsInput>
  }

  export type TagUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagsNestedInput
    transactions?: TransactionTagUpdateManyWithoutTagNestedInput
    plans?: PlanTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionTagUncheckedUpdateManyWithoutTagNestedInput
    plans?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type WalletCreateWithoutPlansInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    goals?: GoalCreateNestedManyWithoutWalletInput
    tags?: TagCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    goals?: GoalUncheckedCreateNestedManyWithoutWalletInput
    tags?: TagUncheckedCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutPlansInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutPlansInput, WalletUncheckedCreateWithoutPlansInput>
  }

  export type CategoryCreateWithoutPlansInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    kind: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutPlansInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPlansInput, CategoryUncheckedCreateWithoutPlansInput>
  }

  export type PlanOccurrenceCreateWithoutPlanInput = {
    id?: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanOccurrenceUncheckedCreateWithoutPlanInput = {
    id?: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanOccurrenceCreateOrConnectWithoutPlanInput = {
    where: PlanOccurrenceWhereUniqueInput
    create: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput>
  }

  export type PlanOccurrenceCreateManyPlanInputEnvelope = {
    data: PlanOccurrenceCreateManyPlanInput | PlanOccurrenceCreateManyPlanInput[]
  }

  export type TransactionCreateWithoutSourcePlanInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    goalAllocations?: GoalAllocationCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSourcePlanInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goalAllocations?: GoalAllocationUncheckedCreateNestedManyWithoutTransactionInput
    tags?: TransactionTagUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutSourcePlanInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput>
  }

  export type TransactionCreateManySourcePlanInputEnvelope = {
    data: TransactionCreateManySourcePlanInput | TransactionCreateManySourcePlanInput[]
  }

  export type PlanTagCreateWithoutPlanInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutPlansInput
  }

  export type PlanTagUncheckedCreateWithoutPlanInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type PlanTagCreateOrConnectWithoutPlanInput = {
    where: PlanTagWhereUniqueInput
    create: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput>
  }

  export type PlanTagCreateManyPlanInputEnvelope = {
    data: PlanTagCreateManyPlanInput | PlanTagCreateManyPlanInput[]
  }

  export type WalletUpsertWithoutPlansInput = {
    update: XOR<WalletUpdateWithoutPlansInput, WalletUncheckedUpdateWithoutPlansInput>
    create: XOR<WalletCreateWithoutPlansInput, WalletUncheckedCreateWithoutPlansInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutPlansInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutPlansInput, WalletUncheckedUpdateWithoutPlansInput>
  }

  export type WalletUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    goals?: GoalUpdateManyWithoutWalletNestedInput
    tags?: TagUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    goals?: GoalUncheckedUpdateManyWithoutWalletNestedInput
    tags?: TagUncheckedUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type CategoryUpsertWithoutPlansInput = {
    update: XOR<CategoryUpdateWithoutPlansInput, CategoryUncheckedUpdateWithoutPlansInput>
    create: XOR<CategoryCreateWithoutPlansInput, CategoryUncheckedCreateWithoutPlansInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPlansInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPlansInput, CategoryUncheckedUpdateWithoutPlansInput>
  }

  export type CategoryUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PlanOccurrenceUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanOccurrenceWhereUniqueInput
    update: XOR<PlanOccurrenceUpdateWithoutPlanInput, PlanOccurrenceUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanOccurrenceCreateWithoutPlanInput, PlanOccurrenceUncheckedCreateWithoutPlanInput>
  }

  export type PlanOccurrenceUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanOccurrenceWhereUniqueInput
    data: XOR<PlanOccurrenceUpdateWithoutPlanInput, PlanOccurrenceUncheckedUpdateWithoutPlanInput>
  }

  export type PlanOccurrenceUpdateManyWithWhereWithoutPlanInput = {
    where: PlanOccurrenceScalarWhereInput
    data: XOR<PlanOccurrenceUpdateManyMutationInput, PlanOccurrenceUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanOccurrenceScalarWhereInput = {
    AND?: PlanOccurrenceScalarWhereInput | PlanOccurrenceScalarWhereInput[]
    OR?: PlanOccurrenceScalarWhereInput[]
    NOT?: PlanOccurrenceScalarWhereInput | PlanOccurrenceScalarWhereInput[]
    id?: StringFilter<"PlanOccurrence"> | string
    planId?: StringFilter<"PlanOccurrence"> | string
    dueDate?: DateTimeFilter<"PlanOccurrence"> | Date | string
    amountCents?: IntFilter<"PlanOccurrence"> | number
    isGenerated?: BoolFilter<"PlanOccurrence"> | boolean
    createdAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
    updatedAt?: DateTimeFilter<"PlanOccurrence"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutSourcePlanInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSourcePlanInput, TransactionUncheckedUpdateWithoutSourcePlanInput>
    create: XOR<TransactionCreateWithoutSourcePlanInput, TransactionUncheckedCreateWithoutSourcePlanInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSourcePlanInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSourcePlanInput, TransactionUncheckedUpdateWithoutSourcePlanInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSourcePlanInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSourcePlanInput>
  }

  export type PlanTagUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanTagWhereUniqueInput
    update: XOR<PlanTagUpdateWithoutPlanInput, PlanTagUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanTagCreateWithoutPlanInput, PlanTagUncheckedCreateWithoutPlanInput>
  }

  export type PlanTagUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanTagWhereUniqueInput
    data: XOR<PlanTagUpdateWithoutPlanInput, PlanTagUncheckedUpdateWithoutPlanInput>
  }

  export type PlanTagUpdateManyWithWhereWithoutPlanInput = {
    where: PlanTagScalarWhereInput
    data: XOR<PlanTagUpdateManyMutationInput, PlanTagUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanCreateWithoutTagsInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPlansInput
    category?: CategoryCreateNestedOneWithoutPlansInput
    occurrences?: PlanOccurrenceCreateNestedManyWithoutPlanInput
    transactions?: TransactionCreateNestedManyWithoutSourcePlanInput
  }

  export type PlanUncheckedCreateWithoutTagsInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    occurrences?: PlanOccurrenceUncheckedCreateNestedManyWithoutPlanInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutSourcePlanInput
  }

  export type PlanCreateOrConnectWithoutTagsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutTagsInput, PlanUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPlansInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTagsInput
    transactions?: TransactionTagCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutPlansInput = {
    id?: string
    walletId: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionTagUncheckedCreateNestedManyWithoutTagInput
    budgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutPlansInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPlansInput, TagUncheckedCreateWithoutPlansInput>
  }

  export type PlanUpsertWithoutTagsInput = {
    update: XOR<PlanUpdateWithoutTagsInput, PlanUncheckedUpdateWithoutTagsInput>
    create: XOR<PlanCreateWithoutTagsInput, PlanUncheckedCreateWithoutTagsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutTagsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutTagsInput, PlanUncheckedUpdateWithoutTagsInput>
  }

  export type PlanUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPlansNestedInput
    category?: CategoryUpdateOneWithoutPlansNestedInput
    occurrences?: PlanOccurrenceUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUpdateManyWithoutSourcePlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    occurrences?: PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput
  }

  export type TagUpsertWithoutPlansInput = {
    update: XOR<TagUpdateWithoutPlansInput, TagUncheckedUpdateWithoutPlansInput>
    create: XOR<TagCreateWithoutPlansInput, TagUncheckedCreateWithoutPlansInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPlansInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPlansInput, TagUncheckedUpdateWithoutPlansInput>
  }

  export type TagUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagsNestedInput
    transactions?: TransactionTagUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionTagUncheckedUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PlanCreateWithoutOccurrencesInput = {
    id?: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPlansInput
    category?: CategoryCreateNestedOneWithoutPlansInput
    transactions?: TransactionCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutOccurrencesInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSourcePlanInput
    tags?: PlanTagUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutOccurrencesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutOccurrencesInput, PlanUncheckedCreateWithoutOccurrencesInput>
  }

  export type PlanUpsertWithoutOccurrencesInput = {
    update: XOR<PlanUpdateWithoutOccurrencesInput, PlanUncheckedUpdateWithoutOccurrencesInput>
    create: XOR<PlanCreateWithoutOccurrencesInput, PlanUncheckedCreateWithoutOccurrencesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutOccurrencesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutOccurrencesInput, PlanUncheckedUpdateWithoutOccurrencesInput>
  }

  export type PlanUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPlansNestedInput
    category?: CategoryUpdateOneWithoutPlansNestedInput
    transactions?: TransactionUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type WalletCreateWithoutGoalsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    plans?: PlanCreateNestedManyWithoutWalletInput
    tags?: TagCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    plans?: PlanUncheckedCreateNestedManyWithoutWalletInput
    tags?: TagUncheckedCreateNestedManyWithoutWalletInput
    tagBudgets?: MonthlyTagBudgetUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutGoalsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutGoalsInput, WalletUncheckedCreateWithoutGoalsInput>
  }

  export type GoalAllocationCreateWithoutGoalInput = {
    id?: string
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
    transaction?: TransactionCreateNestedOneWithoutGoalAllocationsInput
  }

  export type GoalAllocationUncheckedCreateWithoutGoalInput = {
    id?: string
    transactionId?: string | null
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type GoalAllocationCreateOrConnectWithoutGoalInput = {
    where: GoalAllocationWhereUniqueInput
    create: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput>
  }

  export type GoalAllocationCreateManyGoalInputEnvelope = {
    data: GoalAllocationCreateManyGoalInput | GoalAllocationCreateManyGoalInput[]
  }

  export type WalletUpsertWithoutGoalsInput = {
    update: XOR<WalletUpdateWithoutGoalsInput, WalletUncheckedUpdateWithoutGoalsInput>
    create: XOR<WalletCreateWithoutGoalsInput, WalletUncheckedCreateWithoutGoalsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutGoalsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutGoalsInput, WalletUncheckedUpdateWithoutGoalsInput>
  }

  export type WalletUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    plans?: PlanUpdateManyWithoutWalletNestedInput
    tags?: TagUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    plans?: PlanUncheckedUpdateManyWithoutWalletNestedInput
    tags?: TagUncheckedUpdateManyWithoutWalletNestedInput
    tagBudgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type GoalAllocationUpsertWithWhereUniqueWithoutGoalInput = {
    where: GoalAllocationWhereUniqueInput
    update: XOR<GoalAllocationUpdateWithoutGoalInput, GoalAllocationUncheckedUpdateWithoutGoalInput>
    create: XOR<GoalAllocationCreateWithoutGoalInput, GoalAllocationUncheckedCreateWithoutGoalInput>
  }

  export type GoalAllocationUpdateWithWhereUniqueWithoutGoalInput = {
    where: GoalAllocationWhereUniqueInput
    data: XOR<GoalAllocationUpdateWithoutGoalInput, GoalAllocationUncheckedUpdateWithoutGoalInput>
  }

  export type GoalAllocationUpdateManyWithWhereWithoutGoalInput = {
    where: GoalAllocationScalarWhereInput
    data: XOR<GoalAllocationUpdateManyMutationInput, GoalAllocationUncheckedUpdateManyWithoutGoalInput>
  }

  export type GoalCreateWithoutAllocationsInput = {
    id?: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutAllocationsInput = {
    id?: string
    walletId: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutAllocationsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutAllocationsInput, GoalUncheckedCreateWithoutAllocationsInput>
  }

  export type TransactionCreateWithoutGoalAllocationsInput = {
    id?: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sourcePlan?: PlanCreateNestedOneWithoutTransactionsInput
    tags?: TransactionTagCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutGoalAllocationsInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransactionTagUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutGoalAllocationsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGoalAllocationsInput, TransactionUncheckedCreateWithoutGoalAllocationsInput>
  }

  export type GoalUpsertWithoutAllocationsInput = {
    update: XOR<GoalUpdateWithoutAllocationsInput, GoalUncheckedUpdateWithoutAllocationsInput>
    create: XOR<GoalCreateWithoutAllocationsInput, GoalUncheckedCreateWithoutAllocationsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutAllocationsInput, GoalUncheckedUpdateWithoutAllocationsInput>
  }

  export type GoalUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithoutGoalAllocationsInput = {
    update: XOR<TransactionUpdateWithoutGoalAllocationsInput, TransactionUncheckedUpdateWithoutGoalAllocationsInput>
    create: XOR<TransactionCreateWithoutGoalAllocationsInput, TransactionUncheckedCreateWithoutGoalAllocationsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutGoalAllocationsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutGoalAllocationsInput, TransactionUncheckedUpdateWithoutGoalAllocationsInput>
  }

  export type TransactionUpdateWithoutGoalAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sourcePlan?: PlanUpdateOneWithoutTransactionsNestedInput
    tags?: TransactionTagUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGoalAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyWalletInput = {
    id?: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateManyWalletInput = {
    id?: string
    categoryId?: string | null
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateManyWalletInput = {
    id?: string
    name: string
    targetCents: number
    initialAmountCents?: number
    participantCount?: number
    targetDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyWalletInput = {
    id?: string
    name: string
    color?: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyTagBudgetCreateManyWalletInput = {
    id?: string
    tagId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sourcePlan?: PlanUpdateOneWithoutTransactionsNestedInput
    goalAllocations?: GoalAllocationUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAllocations?: GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPlansNestedInput
    occurrences?: PlanOccurrenceUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    occurrences?: PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: GoalAllocationUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: GoalAllocationUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetCents?: IntFieldUpdateOperationsInput | number
    initialAmountCents?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionTagUpdateManyWithoutTagNestedInput
    plans?: PlanTagUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionTagUncheckedUpdateManyWithoutTagNestedInput
    plans?: PlanTagUncheckedUpdateManyWithoutTagNestedInput
    budgets?: MonthlyTagBudgetUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type MonthlyTagBudgetUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    walletId: string
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    sourcePlanId?: string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateManyCategoryInput = {
    id?: string
    walletId: string
    type: $Enums.PlanType
    transactionType: $Enums.TransactionType
    description?: string | null
    amountCents: number
    startDate: Date | string
    endDate?: Date | string | null
    intervalValue?: number
    recurrenceUnit?: $Enums.RecurrenceUnit | null
    installments?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    sourcePlan?: PlanUpdateOneWithoutTransactionsNestedInput
    goalAllocations?: GoalAllocationUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAllocations?: GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourcePlanId?: NullableStringFieldUpdateOperationsInput | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPlansNestedInput
    occurrences?: PlanOccurrenceUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    occurrences?: PlanOccurrenceUncheckedUpdateManyWithoutPlanNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutSourcePlanNestedInput
    tags?: PlanTagUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervalValue?: IntFieldUpdateOperationsInput | number
    recurrenceUnit?: NullableEnumRecurrenceUnitFieldUpdateOperationsInput | $Enums.RecurrenceUnit | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalAllocationCreateManyTransactionInput = {
    id?: string
    goalId: string
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type TransactionTagCreateManyTransactionInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type GoalAllocationUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: GoalUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type GoalAllocationUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalAllocationUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionTagUpdateWithoutTransactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTagUncheckedUpdateWithoutTransactionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagUncheckedUpdateManyWithoutTransactionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagCreateManyTagInput = {
    transactionId: string
    createdAt?: Date | string
  }

  export type PlanTagCreateManyTagInput = {
    planId: string
    createdAt?: Date | string
  }

  export type MonthlyTagBudgetCreateManyTagInput = {
    id?: string
    walletId: string
    monthKey: string
    limitCents: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TransactionTagUncheckedUpdateWithoutTagInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionTagUncheckedUpdateManyWithoutTagInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PlanTagUncheckedUpdateWithoutTagInput = {
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUncheckedUpdateManyWithoutTagInput = {
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTagBudgetsNestedInput
  }

  export type MonthlyTagBudgetUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyTagBudgetUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    limitCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceCreateManyPlanInput = {
    id?: string
    dueDate: Date | string
    amountCents: number
    isGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManySourcePlanInput = {
    id?: string
    walletId: string
    categoryId?: string | null
    type: $Enums.TransactionType
    description?: string | null
    amountCents: number
    dueDate: Date | string
    settlementDueDate?: Date | string | null
    paidAt?: Date | string | null
    installmentIndex?: number | null
    installmentTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanTagCreateManyPlanInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type PlanOccurrenceUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanOccurrenceUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amountCents?: IntFieldUpdateOperationsInput | number
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutSourcePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    goalAllocations?: GoalAllocationUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSourcePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAllocations?: GoalAllocationUncheckedUpdateManyWithoutTransactionNestedInput
    tags?: TransactionTagUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutSourcePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    installmentIndex?: NullableIntFieldUpdateOperationsInput | number | null
    installmentTotal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUpdateWithoutPlanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanTagUncheckedUpdateWithoutPlanInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanTagUncheckedUpdateManyWithoutPlanInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalAllocationCreateManyGoalInput = {
    id?: string
    transactionId?: string | null
    amountCents: number
    allocatedAt?: Date | string
    note?: string | null
  }

  export type GoalAllocationUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transaction?: TransactionUpdateOneWithoutGoalAllocationsNestedInput
  }

  export type GoalAllocationUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalAllocationUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}