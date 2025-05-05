
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model Views
 * 
 */
export type Views = $Result.DefaultSelection<Prisma.$ViewsPayload>
/**
 * Model WishList
 * 
 */
export type WishList = $Result.DefaultSelection<Prisma.$WishListPayload>
/**
 * Model CurrencyRate
 * 
 */
export type CurrencyRate = $Result.DefaultSelection<Prisma.$CurrencyRatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Currency: {
  KZT: 'KZT',
  USD: 'USD',
  RUB: 'RUB',
  EUR: 'EUR',
  CNY: 'CNY',
  TRY: 'TRY',
  UZS: 'UZS'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const PaymentMethod: {
  CASH: 'CASH',
  CASHLESS: 'CASHLESS',
  CARD: 'CARD',
  ANY: 'ANY',
  COMBINE: 'COMBINE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentPeriod: {
  WHEN_LOADING: 'WHEN_LOADING',
  WHEN_UNLOADING: 'WHEN_UNLOADING',
  AFTER_REGISTER: 'AFTER_REGISTER',
  ORIGIN_DOCS: 'ORIGIN_DOCS'
};

export type PaymentPeriod = (typeof PaymentPeriod)[keyof typeof PaymentPeriod]


export const PaymentOther: {
  AUCTION: 'AUCTION',
  NO_AUCTION: 'NO_AUCTION',
  NDS: 'NDS',
  NO_NDS: 'NO_NDS',
  FOR_FUEL: 'FOR_FUEL',
  FAST_PAY: 'FAST_PAY'
};

export type PaymentOther = (typeof PaymentOther)[keyof typeof PaymentOther]


export const TruckType: {
  ANY: 'ANY',
  TENT: 'TENT',
  ISOTHERM: 'ISOTHERM',
  METAL: 'METAL',
  REFRIGERATOR: 'REFRIGERATOR',
  PASSENGER_BUS: 'PASSENGER_BUS',
  LUXURY_BUS: 'LUXURY_BUS',
  CAR_CARRIER: 'CAR_CARRIER',
  CRANE: 'CRANE',
  FUEL_TANKER: 'FUEL_TANKER',
  CONCRETE_MIXER: 'CONCRETE_MIXER',
  BITUM_TANKER: 'BITUM_TANKER',
  PLATFORM_BOARD: 'PLATFORM_BOARD',
  GRAIN_TRUCK: 'GRAIN_TRUCK',
  GRAIN_TIPPER: 'GRAIN_TIPPER',
  EMPTY_CONTAINER: 'EMPTY_CONTAINER',
  CONTAINER_TRUCK: 'CONTAINER_TRUCK',
  FEED_TRUCK: 'FEED_TRUCK',
  TIMBER_TRUCK: 'TIMBER_TRUCK',
  MANIPULATOR: 'MANIPULATOR',
  OIL_TANKER: 'OIL_TANKER',
  FURNITURE_TRUCK: 'FURNITURE_TRUCK',
  METAL_SCRAP_TRUCK: 'METAL_SCRAP_TRUCK',
  MINIBUS: 'MINIBUS',
  FLOUR_TRUCK: 'FLOUR_TRUCK',
  OVERSIZED: 'OVERSIZED',
  OPEN: 'OPEN',
  PANEL_TRUCK: 'PANEL_TRUCK',
  PLATFORM: 'PLATFORM',
  POULTRY_TRUCK: 'POULTRY_TRUCK',
  ROLL_TRUCK: 'ROLL_TRUCK',
  TIPPER: 'TIPPER',
  CATTLE_TRUCK: 'CATTLE_TRUCK',
  SPECIAL_MACHINE: 'SPECIAL_MACHINE',
  GLASS_TRUCK: 'GLASS_TRUCK',
  TRAILER: 'TRAILER',
  PIPE_TRUCK: 'PIPE_TRUCK',
  TRACTOR: 'TRACTOR',
  PLASTIC_BODY: 'PLASTIC_BODY',
  CEMENT_TRUCK: 'CEMENT_TRUCK',
  GAS_TANKER: 'GAS_TANKER',
  ISOTHERM_TANKER: 'ISOTHERM_TANKER',
  FOOD_TANKER: 'FOOD_TANKER',
  CHEMICAL_TANKER: 'CHEMICAL_TANKER',
  WOOD_CHIP_TRUCK: 'WOOD_CHIP_TRUCK',
  TOW_TRUCK: 'TOW_TRUCK',
  EXCAVATOR: 'EXCAVATOR'
};

export type TruckType = (typeof TruckType)[keyof typeof TruckType]


export const LoadingType: {
  REAR: 'REAR',
  SIDE: 'SIDE',
  TOP: 'TOP',
  FULL: 'FULL',
  ANY: 'ANY'
};

export type LoadingType = (typeof LoadingType)[keyof typeof LoadingType]


export const Documents: {
  CMR: 'CMR',
  TIR: 'TIR',
  T1: 'T1',
  T2: 'T2',
  EKMT: 'EKMT',
  SAN_PASSPORT: 'SAN_PASSPORT',
  SAN_BOOK: 'SAN_BOOK',
  CUSTOMS_CERT: 'CUSTOMS_CERT',
  CUSTOMS_CONTROL: 'CUSTOMS_CONTROL',
  COVID_TEST: 'COVID_TEST',
  COVID_CERT: 'COVID_CERT'
};

export type Documents = (typeof Documents)[keyof typeof Documents]


export const DocumentsAdr: {
  ADR1: 'ADR1',
  ADR2: 'ADR2',
  ADR3: 'ADR3',
  ADR4: 'ADR4',
  ADR5: 'ADR5',
  ADR6: 'ADR6',
  ADR7: 'ADR7',
  ADR8: 'ADR8',
  ADR9: 'ADR9'
};

export type DocumentsAdr = (typeof DocumentsAdr)[keyof typeof DocumentsAdr]


export const Loadings: {
  ALWAYS: 'ALWAYS',
  WEEKLY: 'WEEKLY',
  DAILY: 'DAILY',
  AROUND_THE_CLOCK: 'AROUND_THE_CLOCK',
  SEAL: 'SEAL',
  SEMI_TRAILER: 'SEMI_TRAILER',
  COUPLING: 'COUPLING',
  PNEUMATIC_SUSP: 'PNEUMATIC_SUSP',
  HYDRAULIC_LIFT: 'HYDRAULIC_LIFT',
  CURTAIN: 'CURTAIN',
  PYRAMID: 'PYRAMID',
  FRAME: 'FRAME',
  MANIPULATOR: 'MANIPULATOR',
  HYDRAULIC_JACK: 'HYDRAULIC_JACK',
  RAMP: 'RAMP'
};

export type Loadings = (typeof Loadings)[keyof typeof Loadings]


export const Terms: {
  HOOKS: 'HOOKS',
  REMOVABLE_RACKS: 'REMOVABLE_RACKS',
  HARD_BOARD: 'HARD_BOARD',
  WOODEN_FLOOR: 'WOODEN_FLOOR',
  HORNS: 'HORNS',
  MEGA: 'MEGA',
  JUMBO: 'JUMBO',
  HATCHES: 'HATCHES',
  FAST_UNLOAD: 'FAST_UNLOAD'
};

export type Terms = (typeof Terms)[keyof typeof Terms]


export const TermsPalletsType: {
  EUR: 'EUR',
  FIN: 'FIN',
  ISO_111: 'ISO_111',
  ISO_100: 'ISO_100',
  USA: 'USA',
  TUR: 'TUR',
  CHI: 'CHI'
};

export type TermsPalletsType = (typeof TermsPalletsType)[keyof typeof TermsPalletsType]


export const Additionally: {
  READY_TO_LOAD: 'READY_TO_LOAD',
  ROUND_TRIP: 'ROUND_TRIP',
  WITH_FORWARDER: 'WITH_FORWARDER',
  URGENT: 'URGENT',
  PERISHABLE: 'PERISHABLE',
  PLATES_NOW: 'PLATES_NOW',
  ONLY_CARRIER: 'ONLY_CARRIER',
  TO_WAREHOUSE: 'TO_WAREHOUSE',
  GPS: 'GPS',
  FERRY: 'FERRY',
  THERMAL_RECORDER: 'THERMAL_RECORDER'
};

export type Additionally = (typeof Additionally)[keyof typeof Additionally]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentPeriod = $Enums.PaymentPeriod

export const PaymentPeriod: typeof $Enums.PaymentPeriod

export type PaymentOther = $Enums.PaymentOther

export const PaymentOther: typeof $Enums.PaymentOther

export type TruckType = $Enums.TruckType

export const TruckType: typeof $Enums.TruckType

export type LoadingType = $Enums.LoadingType

export const LoadingType: typeof $Enums.LoadingType

export type Documents = $Enums.Documents

export const Documents: typeof $Enums.Documents

export type DocumentsAdr = $Enums.DocumentsAdr

export const DocumentsAdr: typeof $Enums.DocumentsAdr

export type Loadings = $Enums.Loadings

export const Loadings: typeof $Enums.Loadings

export type Terms = $Enums.Terms

export const Terms: typeof $Enums.Terms

export type TermsPalletsType = $Enums.TermsPalletsType

export const TermsPalletsType: typeof $Enums.TermsPalletsType

export type Additionally = $Enums.Additionally

export const Additionally: typeof $Enums.Additionally

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **Views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.ViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishList`: Exposes CRUD operations for the **WishList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WishLists
    * const wishLists = await prisma.wishList.findMany()
    * ```
    */
  get wishList(): Prisma.WishListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currencyRate`: Exposes CRUD operations for the **CurrencyRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrencyRates
    * const currencyRates = await prisma.currencyRate.findMany()
    * ```
    */
  get currencyRate(): Prisma.CurrencyRateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Cargo: 'Cargo',
    Views: 'Views',
    WishList: 'WishList',
    CurrencyRate: 'CurrencyRate'
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
      modelProps: "user" | "cargo" | "views" | "wishList" | "currencyRate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      Views: {
        payload: Prisma.$ViewsPayload<ExtArgs>
        fields: Prisma.ViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findFirst: {
            args: Prisma.ViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findMany: {
            args: Prisma.ViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          create: {
            args: Prisma.ViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          createMany: {
            args: Prisma.ViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          delete: {
            args: Prisma.ViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          update: {
            args: Prisma.ViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          deleteMany: {
            args: Prisma.ViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          upsert: {
            args: Prisma.ViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.ViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      WishList: {
        payload: Prisma.$WishListPayload<ExtArgs>
        fields: Prisma.WishListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          findFirst: {
            args: Prisma.WishListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          findMany: {
            args: Prisma.WishListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>[]
          }
          create: {
            args: Prisma.WishListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          createMany: {
            args: Prisma.WishListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>[]
          }
          delete: {
            args: Prisma.WishListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          update: {
            args: Prisma.WishListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          deleteMany: {
            args: Prisma.WishListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>[]
          }
          upsert: {
            args: Prisma.WishListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishListPayload>
          }
          aggregate: {
            args: Prisma.WishListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishList>
          }
          groupBy: {
            args: Prisma.WishListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishListCountArgs<ExtArgs>
            result: $Utils.Optional<WishListCountAggregateOutputType> | number
          }
        }
      }
      CurrencyRate: {
        payload: Prisma.$CurrencyRatePayload<ExtArgs>
        fields: Prisma.CurrencyRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          findFirst: {
            args: Prisma.CurrencyRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          findMany: {
            args: Prisma.CurrencyRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>[]
          }
          create: {
            args: Prisma.CurrencyRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          createMany: {
            args: Prisma.CurrencyRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>[]
          }
          delete: {
            args: Prisma.CurrencyRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          update: {
            args: Prisma.CurrencyRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          deleteMany: {
            args: Prisma.CurrencyRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>[]
          }
          upsert: {
            args: Prisma.CurrencyRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyRatePayload>
          }
          aggregate: {
            args: Prisma.CurrencyRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencyRate>
          }
          groupBy: {
            args: Prisma.CurrencyRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyRateCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyRateCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    cargo?: CargoOmit
    views?: ViewsOmit
    wishList?: WishListOmit
    currencyRate?: CurrencyRateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cargos: number
    wishList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargos?: boolean | UserCountOutputTypeCountCargosArgs
    wishList?: boolean | UserCountOutputTypeCountWishListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishListWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    wishList: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wishList?: boolean | CargoCountOutputTypeCountWishListArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountWishListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishListWhereInput
  }


  /**
   * Count Type ViewsCountOutputType
   */

  export type ViewsCountOutputType = {
    cargo: number
  }

  export type ViewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | ViewsCountOutputTypeCountCargoArgs
  }

  // Custom InputTypes
  /**
   * ViewsCountOutputType without action
   */
  export type ViewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewsCountOutputType
     */
    select?: ViewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewsCountOutputType without action
   */
  export type ViewsCountOutputTypeCountCargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phone: string | null
    hash: string | null
    name: string | null
    surname: string | null
    city: string | null
    avatar: string | null
    role: $Enums.Role | null
    subscriptionStartDate: Date | null
    subscriptionEndDate: Date | null
    subscriptionStatus: boolean | null
    isVerified: boolean | null
    isBlocked: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phone: string | null
    hash: string | null
    name: string | null
    surname: string | null
    city: string | null
    avatar: string | null
    role: $Enums.Role | null
    subscriptionStartDate: Date | null
    subscriptionEndDate: Date | null
    subscriptionStatus: boolean | null
    isVerified: boolean | null
    isBlocked: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    phone: number
    hash: number
    name: number
    surname: number
    city: number
    avatar: number
    role: number
    whatsappNumbers: number
    telegramNumbers: number
    viberNumbers: number
    skypeNumbers: number
    otherNumbers: number
    subscriptionStartDate: number
    subscriptionEndDate: number
    subscriptionStatus: number
    isVerified: number
    isBlocked: number
    documents: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    hash?: true
    name?: true
    surname?: true
    city?: true
    avatar?: true
    role?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    subscriptionStatus?: true
    isVerified?: true
    isBlocked?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    hash?: true
    name?: true
    surname?: true
    city?: true
    avatar?: true
    role?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    subscriptionStatus?: true
    isVerified?: true
    isBlocked?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phone?: true
    hash?: true
    name?: true
    surname?: true
    city?: true
    avatar?: true
    role?: true
    whatsappNumbers?: true
    telegramNumbers?: true
    viberNumbers?: true
    skypeNumbers?: true
    otherNumbers?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    subscriptionStatus?: true
    isVerified?: true
    isBlocked?: true
    documents?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string | null
    phone: string | null
    hash: string
    name: string | null
    surname: string | null
    city: string | null
    avatar: string | null
    role: $Enums.Role
    whatsappNumbers: string[]
    telegramNumbers: string[]
    viberNumbers: string[]
    skypeNumbers: string[]
    otherNumbers: string[]
    subscriptionStartDate: Date | null
    subscriptionEndDate: Date | null
    subscriptionStatus: boolean | null
    isVerified: boolean | null
    isBlocked: boolean | null
    documents: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    name?: boolean
    surname?: boolean
    city?: boolean
    avatar?: boolean
    role?: boolean
    whatsappNumbers?: boolean
    telegramNumbers?: boolean
    viberNumbers?: boolean
    skypeNumbers?: boolean
    otherNumbers?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    subscriptionStatus?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    documents?: boolean
    cargos?: boolean | User$cargosArgs<ExtArgs>
    wishList?: boolean | User$wishListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    name?: boolean
    surname?: boolean
    city?: boolean
    avatar?: boolean
    role?: boolean
    whatsappNumbers?: boolean
    telegramNumbers?: boolean
    viberNumbers?: boolean
    skypeNumbers?: boolean
    otherNumbers?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    subscriptionStatus?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    documents?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    name?: boolean
    surname?: boolean
    city?: boolean
    avatar?: boolean
    role?: boolean
    whatsappNumbers?: boolean
    telegramNumbers?: boolean
    viberNumbers?: boolean
    skypeNumbers?: boolean
    otherNumbers?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    subscriptionStatus?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    documents?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    name?: boolean
    surname?: boolean
    city?: boolean
    avatar?: boolean
    role?: boolean
    whatsappNumbers?: boolean
    telegramNumbers?: boolean
    viberNumbers?: boolean
    skypeNumbers?: boolean
    otherNumbers?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    subscriptionStatus?: boolean
    isVerified?: boolean
    isBlocked?: boolean
    documents?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "phone" | "hash" | "name" | "surname" | "city" | "avatar" | "role" | "whatsappNumbers" | "telegramNumbers" | "viberNumbers" | "skypeNumbers" | "otherNumbers" | "subscriptionStartDate" | "subscriptionEndDate" | "subscriptionStatus" | "isVerified" | "isBlocked" | "documents", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargos?: boolean | User$cargosArgs<ExtArgs>
    wishList?: boolean | User$wishListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cargos: Prisma.$CargoPayload<ExtArgs>[]
      wishList: Prisma.$WishListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string | null
      phone: string | null
      hash: string
      name: string | null
      surname: string | null
      city: string | null
      avatar: string | null
      role: $Enums.Role
      whatsappNumbers: string[]
      telegramNumbers: string[]
      viberNumbers: string[]
      skypeNumbers: string[]
      otherNumbers: string[]
      subscriptionStartDate: Date | null
      subscriptionEndDate: Date | null
      subscriptionStatus: boolean | null
      isVerified: boolean | null
      isBlocked: boolean | null
      documents: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargos<T extends User$cargosArgs<ExtArgs> = {}>(args?: Subset<T, User$cargosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishList<T extends User$wishListArgs<ExtArgs> = {}>(args?: Subset<T, User$wishListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly whatsappNumbers: FieldRef<"User", 'String[]'>
    readonly telegramNumbers: FieldRef<"User", 'String[]'>
    readonly viberNumbers: FieldRef<"User", 'String[]'>
    readonly skypeNumbers: FieldRef<"User", 'String[]'>
    readonly otherNumbers: FieldRef<"User", 'String[]'>
    readonly subscriptionStartDate: FieldRef<"User", 'DateTime'>
    readonly subscriptionEndDate: FieldRef<"User", 'DateTime'>
    readonly subscriptionStatus: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly documents: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cargos
   */
  export type User$cargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    cursor?: CargoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * User.wishList
   */
  export type User$wishListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    where?: WishListWhereInput
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    cursor?: WishListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishListScalarFieldEnum | WishListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    price: number | null
    distance: number | null
    tariff: number | null
    weight: number | null
    volume: number | null
    periodDays: number | null
  }

  export type CargoSumAggregateOutputType = {
    price: number | null
    distance: number | null
    tariff: number | null
    weight: number | null
    volume: number | null
    periodDays: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    price: number | null
    currency: $Enums.Currency | null
    note: string | null
    distance: number | null
    tariff: number | null
    routeLink: string | null
    weight: number | null
    volume: number | null
    periodDays: number | null
    startDate: Date | null
    endDate: Date | null
    isArchived: boolean | null
    archivedDate: Date | null
    paymentPrepaymentPercent: string | null
    paymentDeferredDays: string | null
    optionDocumentsAdr: $Enums.DocumentsAdr | null
    optionLoadingsTimeLoading: string | null
    optionLoadingsTimeUnloading: string | null
    optionLoadingsDateUnloading: Date | null
    optionLoadingsPlaceLoading: string | null
    optionLoadingsPlaceUnloading: string | null
    optionLoadingsBigBag: string | null
    optionTermsTemperature: string | null
    optionTermsQtyPallets: string | null
    optionTermsCorners: string | null
    optionTermsBelts: string | null
    optionTermsPalletsType: $Enums.TermsPalletsType | null
    userId: string | null
    userName: string | null
    userPhone: string | null
    viewsId: string | null
  }

  export type CargoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    price: number | null
    currency: $Enums.Currency | null
    note: string | null
    distance: number | null
    tariff: number | null
    routeLink: string | null
    weight: number | null
    volume: number | null
    periodDays: number | null
    startDate: Date | null
    endDate: Date | null
    isArchived: boolean | null
    archivedDate: Date | null
    paymentPrepaymentPercent: string | null
    paymentDeferredDays: string | null
    optionDocumentsAdr: $Enums.DocumentsAdr | null
    optionLoadingsTimeLoading: string | null
    optionLoadingsTimeUnloading: string | null
    optionLoadingsDateUnloading: Date | null
    optionLoadingsPlaceLoading: string | null
    optionLoadingsPlaceUnloading: string | null
    optionLoadingsBigBag: string | null
    optionTermsTemperature: string | null
    optionTermsQtyPallets: string | null
    optionTermsCorners: string | null
    optionTermsBelts: string | null
    optionTermsPalletsType: $Enums.TermsPalletsType | null
    userId: string | null
    userName: string | null
    userPhone: string | null
    viewsId: string | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    price: number
    currency: number
    note: number
    placesLoading: number
    placesUnloading: number
    distance: number
    tariff: number
    routeLink: number
    weight: number
    volume: number
    periodDays: number
    startDate: number
    endDate: number
    isArchived: number
    archivedDate: number
    truckType: number
    loadingType: number
    paymentMethod: number
    paymentPeriod: number
    paymentOther: number
    paymentPrepaymentPercent: number
    paymentDeferredDays: number
    optionDocuments: number
    optionDocumentsAdr: number
    optionLoadings: number
    optionLoadingsTimeLoading: number
    optionLoadingsTimeUnloading: number
    optionLoadingsDateUnloading: number
    optionLoadingsPlaceLoading: number
    optionLoadingsPlaceUnloading: number
    optionLoadingsBigBag: number
    optionTerms: number
    optionTermsTemperature: number
    optionTermsQtyPallets: number
    optionTermsCorners: number
    optionTermsBelts: number
    optionTermsPalletsType: number
    optionAdditionally: number
    userId: number
    userName: number
    userPhone: number
    viewsId: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    price?: true
    distance?: true
    tariff?: true
    weight?: true
    volume?: true
    periodDays?: true
  }

  export type CargoSumAggregateInputType = {
    price?: true
    distance?: true
    tariff?: true
    weight?: true
    volume?: true
    periodDays?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    price?: true
    currency?: true
    note?: true
    distance?: true
    tariff?: true
    routeLink?: true
    weight?: true
    volume?: true
    periodDays?: true
    startDate?: true
    endDate?: true
    isArchived?: true
    archivedDate?: true
    paymentPrepaymentPercent?: true
    paymentDeferredDays?: true
    optionDocumentsAdr?: true
    optionLoadingsTimeLoading?: true
    optionLoadingsTimeUnloading?: true
    optionLoadingsDateUnloading?: true
    optionLoadingsPlaceLoading?: true
    optionLoadingsPlaceUnloading?: true
    optionLoadingsBigBag?: true
    optionTermsTemperature?: true
    optionTermsQtyPallets?: true
    optionTermsCorners?: true
    optionTermsBelts?: true
    optionTermsPalletsType?: true
    userId?: true
    userName?: true
    userPhone?: true
    viewsId?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    price?: true
    currency?: true
    note?: true
    distance?: true
    tariff?: true
    routeLink?: true
    weight?: true
    volume?: true
    periodDays?: true
    startDate?: true
    endDate?: true
    isArchived?: true
    archivedDate?: true
    paymentPrepaymentPercent?: true
    paymentDeferredDays?: true
    optionDocumentsAdr?: true
    optionLoadingsTimeLoading?: true
    optionLoadingsTimeUnloading?: true
    optionLoadingsDateUnloading?: true
    optionLoadingsPlaceLoading?: true
    optionLoadingsPlaceUnloading?: true
    optionLoadingsBigBag?: true
    optionTermsTemperature?: true
    optionTermsQtyPallets?: true
    optionTermsCorners?: true
    optionTermsBelts?: true
    optionTermsPalletsType?: true
    userId?: true
    userName?: true
    userPhone?: true
    viewsId?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    price?: true
    currency?: true
    note?: true
    placesLoading?: true
    placesUnloading?: true
    distance?: true
    tariff?: true
    routeLink?: true
    weight?: true
    volume?: true
    periodDays?: true
    startDate?: true
    endDate?: true
    isArchived?: true
    archivedDate?: true
    truckType?: true
    loadingType?: true
    paymentMethod?: true
    paymentPeriod?: true
    paymentOther?: true
    paymentPrepaymentPercent?: true
    paymentDeferredDays?: true
    optionDocuments?: true
    optionDocumentsAdr?: true
    optionLoadings?: true
    optionLoadingsTimeLoading?: true
    optionLoadingsTimeUnloading?: true
    optionLoadingsDateUnloading?: true
    optionLoadingsPlaceLoading?: true
    optionLoadingsPlaceUnloading?: true
    optionLoadingsBigBag?: true
    optionTerms?: true
    optionTermsTemperature?: true
    optionTermsQtyPallets?: true
    optionTermsCorners?: true
    optionTermsBelts?: true
    optionTermsPalletsType?: true
    optionAdditionally?: true
    userId?: true
    userName?: true
    userPhone?: true
    viewsId?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    price: number
    currency: $Enums.Currency
    note: string | null
    placesLoading: string[]
    placesUnloading: string[]
    distance: number | null
    tariff: number | null
    routeLink: string | null
    weight: number
    volume: number
    periodDays: number
    startDate: Date
    endDate: Date | null
    isArchived: boolean | null
    archivedDate: Date | null
    truckType: $Enums.TruckType[]
    loadingType: $Enums.LoadingType[]
    paymentMethod: $Enums.PaymentMethod[]
    paymentPeriod: $Enums.PaymentPeriod[]
    paymentOther: $Enums.PaymentOther[]
    paymentPrepaymentPercent: string | null
    paymentDeferredDays: string | null
    optionDocuments: $Enums.Documents[]
    optionDocumentsAdr: $Enums.DocumentsAdr | null
    optionLoadings: $Enums.Loadings[]
    optionLoadingsTimeLoading: string | null
    optionLoadingsTimeUnloading: string | null
    optionLoadingsDateUnloading: Date | null
    optionLoadingsPlaceLoading: string | null
    optionLoadingsPlaceUnloading: string | null
    optionLoadingsBigBag: string | null
    optionTerms: $Enums.Terms[]
    optionTermsTemperature: string | null
    optionTermsQtyPallets: string | null
    optionTermsCorners: string | null
    optionTermsBelts: string | null
    optionTermsPalletsType: $Enums.TermsPalletsType | null
    optionAdditionally: $Enums.Additionally[]
    userId: string | null
    userName: string | null
    userPhone: string | null
    viewsId: string | null
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    price?: boolean
    currency?: boolean
    note?: boolean
    placesLoading?: boolean
    placesUnloading?: boolean
    distance?: boolean
    tariff?: boolean
    routeLink?: boolean
    weight?: boolean
    volume?: boolean
    periodDays?: boolean
    startDate?: boolean
    endDate?: boolean
    isArchived?: boolean
    archivedDate?: boolean
    truckType?: boolean
    loadingType?: boolean
    paymentMethod?: boolean
    paymentPeriod?: boolean
    paymentOther?: boolean
    paymentPrepaymentPercent?: boolean
    paymentDeferredDays?: boolean
    optionDocuments?: boolean
    optionDocumentsAdr?: boolean
    optionLoadings?: boolean
    optionLoadingsTimeLoading?: boolean
    optionLoadingsTimeUnloading?: boolean
    optionLoadingsDateUnloading?: boolean
    optionLoadingsPlaceLoading?: boolean
    optionLoadingsPlaceUnloading?: boolean
    optionLoadingsBigBag?: boolean
    optionTerms?: boolean
    optionTermsTemperature?: boolean
    optionTermsQtyPallets?: boolean
    optionTermsCorners?: boolean
    optionTermsBelts?: boolean
    optionTermsPalletsType?: boolean
    optionAdditionally?: boolean
    userId?: boolean
    userName?: boolean
    userPhone?: boolean
    viewsId?: boolean
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
    wishList?: boolean | Cargo$wishListArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    price?: boolean
    currency?: boolean
    note?: boolean
    placesLoading?: boolean
    placesUnloading?: boolean
    distance?: boolean
    tariff?: boolean
    routeLink?: boolean
    weight?: boolean
    volume?: boolean
    periodDays?: boolean
    startDate?: boolean
    endDate?: boolean
    isArchived?: boolean
    archivedDate?: boolean
    truckType?: boolean
    loadingType?: boolean
    paymentMethod?: boolean
    paymentPeriod?: boolean
    paymentOther?: boolean
    paymentPrepaymentPercent?: boolean
    paymentDeferredDays?: boolean
    optionDocuments?: boolean
    optionDocumentsAdr?: boolean
    optionLoadings?: boolean
    optionLoadingsTimeLoading?: boolean
    optionLoadingsTimeUnloading?: boolean
    optionLoadingsDateUnloading?: boolean
    optionLoadingsPlaceLoading?: boolean
    optionLoadingsPlaceUnloading?: boolean
    optionLoadingsBigBag?: boolean
    optionTerms?: boolean
    optionTermsTemperature?: boolean
    optionTermsQtyPallets?: boolean
    optionTermsCorners?: boolean
    optionTermsBelts?: boolean
    optionTermsPalletsType?: boolean
    optionAdditionally?: boolean
    userId?: boolean
    userName?: boolean
    userPhone?: boolean
    viewsId?: boolean
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    price?: boolean
    currency?: boolean
    note?: boolean
    placesLoading?: boolean
    placesUnloading?: boolean
    distance?: boolean
    tariff?: boolean
    routeLink?: boolean
    weight?: boolean
    volume?: boolean
    periodDays?: boolean
    startDate?: boolean
    endDate?: boolean
    isArchived?: boolean
    archivedDate?: boolean
    truckType?: boolean
    loadingType?: boolean
    paymentMethod?: boolean
    paymentPeriod?: boolean
    paymentOther?: boolean
    paymentPrepaymentPercent?: boolean
    paymentDeferredDays?: boolean
    optionDocuments?: boolean
    optionDocumentsAdr?: boolean
    optionLoadings?: boolean
    optionLoadingsTimeLoading?: boolean
    optionLoadingsTimeUnloading?: boolean
    optionLoadingsDateUnloading?: boolean
    optionLoadingsPlaceLoading?: boolean
    optionLoadingsPlaceUnloading?: boolean
    optionLoadingsBigBag?: boolean
    optionTerms?: boolean
    optionTermsTemperature?: boolean
    optionTermsQtyPallets?: boolean
    optionTermsCorners?: boolean
    optionTermsBelts?: boolean
    optionTermsPalletsType?: boolean
    optionAdditionally?: boolean
    userId?: boolean
    userName?: boolean
    userPhone?: boolean
    viewsId?: boolean
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    price?: boolean
    currency?: boolean
    note?: boolean
    placesLoading?: boolean
    placesUnloading?: boolean
    distance?: boolean
    tariff?: boolean
    routeLink?: boolean
    weight?: boolean
    volume?: boolean
    periodDays?: boolean
    startDate?: boolean
    endDate?: boolean
    isArchived?: boolean
    archivedDate?: boolean
    truckType?: boolean
    loadingType?: boolean
    paymentMethod?: boolean
    paymentPeriod?: boolean
    paymentOther?: boolean
    paymentPrepaymentPercent?: boolean
    paymentDeferredDays?: boolean
    optionDocuments?: boolean
    optionDocumentsAdr?: boolean
    optionLoadings?: boolean
    optionLoadingsTimeLoading?: boolean
    optionLoadingsTimeUnloading?: boolean
    optionLoadingsDateUnloading?: boolean
    optionLoadingsPlaceLoading?: boolean
    optionLoadingsPlaceUnloading?: boolean
    optionLoadingsBigBag?: boolean
    optionTerms?: boolean
    optionTermsTemperature?: boolean
    optionTermsQtyPallets?: boolean
    optionTermsCorners?: boolean
    optionTermsBelts?: boolean
    optionTermsPalletsType?: boolean
    optionAdditionally?: boolean
    userId?: boolean
    userName?: boolean
    userPhone?: boolean
    viewsId?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "price" | "currency" | "note" | "placesLoading" | "placesUnloading" | "distance" | "tariff" | "routeLink" | "weight" | "volume" | "periodDays" | "startDate" | "endDate" | "isArchived" | "archivedDate" | "truckType" | "loadingType" | "paymentMethod" | "paymentPeriod" | "paymentOther" | "paymentPrepaymentPercent" | "paymentDeferredDays" | "optionDocuments" | "optionDocumentsAdr" | "optionLoadings" | "optionLoadingsTimeLoading" | "optionLoadingsTimeUnloading" | "optionLoadingsDateUnloading" | "optionLoadingsPlaceLoading" | "optionLoadingsPlaceUnloading" | "optionLoadingsBigBag" | "optionTerms" | "optionTermsTemperature" | "optionTermsQtyPallets" | "optionTermsCorners" | "optionTermsBelts" | "optionTermsPalletsType" | "optionAdditionally" | "userId" | "userName" | "userPhone" | "viewsId", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
    wishList?: boolean | Cargo$wishListArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
  }
  export type CargoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cargo$userArgs<ExtArgs>
    views?: boolean | Cargo$viewsArgs<ExtArgs>
  }

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      views: Prisma.$ViewsPayload<ExtArgs> | null
      wishList: Prisma.$WishListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      price: number
      currency: $Enums.Currency
      note: string | null
      placesLoading: string[]
      placesUnloading: string[]
      distance: number | null
      tariff: number | null
      routeLink: string | null
      weight: number
      volume: number
      periodDays: number
      startDate: Date
      endDate: Date | null
      isArchived: boolean | null
      archivedDate: Date | null
      truckType: $Enums.TruckType[]
      loadingType: $Enums.LoadingType[]
      paymentMethod: $Enums.PaymentMethod[]
      paymentPeriod: $Enums.PaymentPeriod[]
      paymentOther: $Enums.PaymentOther[]
      paymentPrepaymentPercent: string | null
      paymentDeferredDays: string | null
      optionDocuments: $Enums.Documents[]
      optionDocumentsAdr: $Enums.DocumentsAdr | null
      optionLoadings: $Enums.Loadings[]
      optionLoadingsTimeLoading: string | null
      optionLoadingsTimeUnloading: string | null
      optionLoadingsDateUnloading: Date | null
      optionLoadingsPlaceLoading: string | null
      optionLoadingsPlaceUnloading: string | null
      optionLoadingsBigBag: string | null
      optionTerms: $Enums.Terms[]
      optionTermsTemperature: string | null
      optionTermsQtyPallets: string | null
      optionTermsCorners: string | null
      optionTermsBelts: string | null
      optionTermsPalletsType: $Enums.TermsPalletsType | null
      optionAdditionally: $Enums.Additionally[]
      userId: string | null
      userName: string | null
      userPhone: string | null
      viewsId: string | null
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargos and returns the data saved in the database.
     * @param {CargoCreateManyAndReturnArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargoCreateManyAndReturnArgs>(args?: SelectSubset<T, CargoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos and returns the data updated in the database.
     * @param {CargoUpdateManyAndReturnArgs} args - Arguments to update many Cargos.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CargoUpdateManyAndReturnArgs>(args: SelectSubset<T, CargoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
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
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Cargo$userArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    views<T extends Cargo$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$viewsArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wishList<T extends Cargo$wishListArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$wishListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly id: FieldRef<"Cargo", 'String'>
    readonly createdAt: FieldRef<"Cargo", 'DateTime'>
    readonly updatedAt: FieldRef<"Cargo", 'DateTime'>
    readonly title: FieldRef<"Cargo", 'String'>
    readonly price: FieldRef<"Cargo", 'Int'>
    readonly currency: FieldRef<"Cargo", 'Currency'>
    readonly note: FieldRef<"Cargo", 'String'>
    readonly placesLoading: FieldRef<"Cargo", 'String[]'>
    readonly placesUnloading: FieldRef<"Cargo", 'String[]'>
    readonly distance: FieldRef<"Cargo", 'Int'>
    readonly tariff: FieldRef<"Cargo", 'Int'>
    readonly routeLink: FieldRef<"Cargo", 'String'>
    readonly weight: FieldRef<"Cargo", 'Float'>
    readonly volume: FieldRef<"Cargo", 'Float'>
    readonly periodDays: FieldRef<"Cargo", 'Int'>
    readonly startDate: FieldRef<"Cargo", 'DateTime'>
    readonly endDate: FieldRef<"Cargo", 'DateTime'>
    readonly isArchived: FieldRef<"Cargo", 'Boolean'>
    readonly archivedDate: FieldRef<"Cargo", 'DateTime'>
    readonly truckType: FieldRef<"Cargo", 'TruckType[]'>
    readonly loadingType: FieldRef<"Cargo", 'LoadingType[]'>
    readonly paymentMethod: FieldRef<"Cargo", 'PaymentMethod[]'>
    readonly paymentPeriod: FieldRef<"Cargo", 'PaymentPeriod[]'>
    readonly paymentOther: FieldRef<"Cargo", 'PaymentOther[]'>
    readonly paymentPrepaymentPercent: FieldRef<"Cargo", 'String'>
    readonly paymentDeferredDays: FieldRef<"Cargo", 'String'>
    readonly optionDocuments: FieldRef<"Cargo", 'Documents[]'>
    readonly optionDocumentsAdr: FieldRef<"Cargo", 'DocumentsAdr'>
    readonly optionLoadings: FieldRef<"Cargo", 'Loadings[]'>
    readonly optionLoadingsTimeLoading: FieldRef<"Cargo", 'String'>
    readonly optionLoadingsTimeUnloading: FieldRef<"Cargo", 'String'>
    readonly optionLoadingsDateUnloading: FieldRef<"Cargo", 'DateTime'>
    readonly optionLoadingsPlaceLoading: FieldRef<"Cargo", 'String'>
    readonly optionLoadingsPlaceUnloading: FieldRef<"Cargo", 'String'>
    readonly optionLoadingsBigBag: FieldRef<"Cargo", 'String'>
    readonly optionTerms: FieldRef<"Cargo", 'Terms[]'>
    readonly optionTermsTemperature: FieldRef<"Cargo", 'String'>
    readonly optionTermsQtyPallets: FieldRef<"Cargo", 'String'>
    readonly optionTermsCorners: FieldRef<"Cargo", 'String'>
    readonly optionTermsBelts: FieldRef<"Cargo", 'String'>
    readonly optionTermsPalletsType: FieldRef<"Cargo", 'TermsPalletsType'>
    readonly optionAdditionally: FieldRef<"Cargo", 'Additionally[]'>
    readonly userId: FieldRef<"Cargo", 'String'>
    readonly userName: FieldRef<"Cargo", 'String'>
    readonly userPhone: FieldRef<"Cargo", 'String'>
    readonly viewsId: FieldRef<"Cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo createManyAndReturn
   */
  export type CargoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo updateManyAndReturn
   */
  export type CargoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.user
   */
  export type Cargo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Cargo.views
   */
  export type Cargo$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
  }

  /**
   * Cargo.wishList
   */
  export type Cargo$wishListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    where?: WishListWhereInput
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    cursor?: WishListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishListScalarFieldEnum | WishListScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model Views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    count: number | null
  }

  export type ViewsSumAggregateOutputType = {
    count: number | null
  }

  export type ViewsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    count: number | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    count: number | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    count: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    count?: true
  }

  export type ViewsSumAggregateInputType = {
    count?: true
  }

  export type ViewsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    count?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    count?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    count?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to aggregate.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type ViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithAggregationInput | ViewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: ViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    count: number
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends ViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type ViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    count?: boolean
    cargo?: boolean | Views$cargoArgs<ExtArgs>
    _count?: boolean | ViewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    count?: boolean
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    count?: boolean
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    count?: boolean
  }

  export type ViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "count", ExtArgs["result"]["views"]>
  export type ViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | Views$cargoArgs<ExtArgs>
    _count?: boolean | ViewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Views"
    objects: {
      cargo: Prisma.$CargoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      count: number
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type ViewsGetPayload<S extends boolean | null | undefined | ViewsDefaultArgs> = $Result.GetResult<Prisma.$ViewsPayload, S>

  type ViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface ViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Views'], meta: { name: 'Views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {ViewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewsFindUniqueArgs>(args: SelectSubset<T, ViewsFindUniqueArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewsFindFirstArgs>(args?: SelectSubset<T, ViewsFindFirstArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewsFindManyArgs>(args?: SelectSubset<T, ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Views.
     * @param {ViewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends ViewsCreateArgs>(args: SelectSubset<T, ViewsCreateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewsCreateManyArgs>(args?: SelectSubset<T, ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewsCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewsWithIdOnly = await prisma.views.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Views.
     * @param {ViewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends ViewsDeleteArgs>(args: SelectSubset<T, ViewsDeleteArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Views.
     * @param {ViewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewsUpdateArgs>(args: SelectSubset<T, ViewsUpdateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewsDeleteManyArgs>(args?: SelectSubset<T, ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewsUpdateManyArgs>(args: SelectSubset<T, ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewsUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewsWithIdOnly = await prisma.views.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Views.
     * @param {ViewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends ViewsUpsertArgs>(args: SelectSubset<T, ViewsUpsertArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewsCountArgs>(
      args?: Subset<T, ViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsGroupByArgs} args - Group by arguments.
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
      T extends ViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewsGroupByArgs['orderBy'] }
        : { orderBy?: ViewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Views model
   */
  readonly fields: ViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargo<T extends Views$cargoArgs<ExtArgs> = {}>(args?: Subset<T, Views$cargoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Views model
   */
  interface ViewsFieldRefs {
    readonly id: FieldRef<"Views", 'String'>
    readonly createdAt: FieldRef<"Views", 'DateTime'>
    readonly updatedAt: FieldRef<"Views", 'DateTime'>
    readonly count: FieldRef<"Views", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Views findUnique
   */
  export type ViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findUniqueOrThrow
   */
  export type ViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findFirst
   */
  export type ViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findFirstOrThrow
   */
  export type ViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findMany
   */
  export type ViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views create
   */
  export type ViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Views.
     */
    data: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
  }

  /**
   * Views createMany
   */
  export type ViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Views createManyAndReturn
   */
  export type ViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Views update
   */
  export type ViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Views.
     */
    data: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
    /**
     * Choose, which Views to update.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views updateMany
   */
  export type ViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * Views updateManyAndReturn
   */
  export type ViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * Views upsert
   */
  export type ViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Views to update in case it exists.
     */
    where: ViewsWhereUniqueInput
    /**
     * In case the Views found by the `where` argument doesn't exist, create a new Views with this data.
     */
    create: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
    /**
     * In case the Views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
  }

  /**
   * Views delete
   */
  export type ViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter which Views to delete.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views deleteMany
   */
  export type ViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * Views.cargo
   */
  export type Views$cargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    cursor?: CargoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Views without action
   */
  export type ViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
  }


  /**
   * Model WishList
   */

  export type AggregateWishList = {
    _count: WishListCountAggregateOutputType | null
    _min: WishListMinAggregateOutputType | null
    _max: WishListMaxAggregateOutputType | null
  }

  export type WishListMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    cargoId: string | null
  }

  export type WishListMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    cargoId: string | null
  }

  export type WishListCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    cargoId: number
    _all: number
  }


  export type WishListMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    cargoId?: true
  }

  export type WishListMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    cargoId?: true
  }

  export type WishListCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    cargoId?: true
    _all?: true
  }

  export type WishListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishList to aggregate.
     */
    where?: WishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishLists to fetch.
     */
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WishLists
    **/
    _count?: true | WishListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishListMaxAggregateInputType
  }

  export type GetWishListAggregateType<T extends WishListAggregateArgs> = {
        [P in keyof T & keyof AggregateWishList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishList[P]>
      : GetScalarType<T[P], AggregateWishList[P]>
  }




  export type WishListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishListWhereInput
    orderBy?: WishListOrderByWithAggregationInput | WishListOrderByWithAggregationInput[]
    by: WishListScalarFieldEnum[] | WishListScalarFieldEnum
    having?: WishListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishListCountAggregateInputType | true
    _min?: WishListMinAggregateInputType
    _max?: WishListMaxAggregateInputType
  }

  export type WishListGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    cargoId: string | null
    _count: WishListCountAggregateOutputType | null
    _min: WishListMinAggregateOutputType | null
    _max: WishListMaxAggregateOutputType | null
  }

  type GetWishListGroupByPayload<T extends WishListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishListGroupByOutputType[P]>
            : GetScalarType<T[P], WishListGroupByOutputType[P]>
        }
      >
    >


  export type WishListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    cargoId?: boolean
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }, ExtArgs["result"]["wishList"]>

  export type WishListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    cargoId?: boolean
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }, ExtArgs["result"]["wishList"]>

  export type WishListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    cargoId?: boolean
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }, ExtArgs["result"]["wishList"]>

  export type WishListSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    cargoId?: boolean
  }

  export type WishListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "cargoId", ExtArgs["result"]["wishList"]>
  export type WishListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }
  export type WishListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }
  export type WishListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WishList$userArgs<ExtArgs>
    cargo?: boolean | WishList$cargoArgs<ExtArgs>
  }

  export type $WishListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WishList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      cargo: Prisma.$CargoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
      cargoId: string | null
    }, ExtArgs["result"]["wishList"]>
    composites: {}
  }

  type WishListGetPayload<S extends boolean | null | undefined | WishListDefaultArgs> = $Result.GetResult<Prisma.$WishListPayload, S>

  type WishListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishListCountAggregateInputType | true
    }

  export interface WishListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WishList'], meta: { name: 'WishList' } }
    /**
     * Find zero or one WishList that matches the filter.
     * @param {WishListFindUniqueArgs} args - Arguments to find a WishList
     * @example
     * // Get one WishList
     * const wishList = await prisma.wishList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishListFindUniqueArgs>(args: SelectSubset<T, WishListFindUniqueArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WishList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishListFindUniqueOrThrowArgs} args - Arguments to find a WishList
     * @example
     * // Get one WishList
     * const wishList = await prisma.wishList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishListFindUniqueOrThrowArgs>(args: SelectSubset<T, WishListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListFindFirstArgs} args - Arguments to find a WishList
     * @example
     * // Get one WishList
     * const wishList = await prisma.wishList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishListFindFirstArgs>(args?: SelectSubset<T, WishListFindFirstArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListFindFirstOrThrowArgs} args - Arguments to find a WishList
     * @example
     * // Get one WishList
     * const wishList = await prisma.wishList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishListFindFirstOrThrowArgs>(args?: SelectSubset<T, WishListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WishLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WishLists
     * const wishLists = await prisma.wishList.findMany()
     * 
     * // Get first 10 WishLists
     * const wishLists = await prisma.wishList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishListWithIdOnly = await prisma.wishList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishListFindManyArgs>(args?: SelectSubset<T, WishListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WishList.
     * @param {WishListCreateArgs} args - Arguments to create a WishList.
     * @example
     * // Create one WishList
     * const WishList = await prisma.wishList.create({
     *   data: {
     *     // ... data to create a WishList
     *   }
     * })
     * 
     */
    create<T extends WishListCreateArgs>(args: SelectSubset<T, WishListCreateArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WishLists.
     * @param {WishListCreateManyArgs} args - Arguments to create many WishLists.
     * @example
     * // Create many WishLists
     * const wishList = await prisma.wishList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishListCreateManyArgs>(args?: SelectSubset<T, WishListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WishLists and returns the data saved in the database.
     * @param {WishListCreateManyAndReturnArgs} args - Arguments to create many WishLists.
     * @example
     * // Create many WishLists
     * const wishList = await prisma.wishList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WishLists and only return the `id`
     * const wishListWithIdOnly = await prisma.wishList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishListCreateManyAndReturnArgs>(args?: SelectSubset<T, WishListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WishList.
     * @param {WishListDeleteArgs} args - Arguments to delete one WishList.
     * @example
     * // Delete one WishList
     * const WishList = await prisma.wishList.delete({
     *   where: {
     *     // ... filter to delete one WishList
     *   }
     * })
     * 
     */
    delete<T extends WishListDeleteArgs>(args: SelectSubset<T, WishListDeleteArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WishList.
     * @param {WishListUpdateArgs} args - Arguments to update one WishList.
     * @example
     * // Update one WishList
     * const wishList = await prisma.wishList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishListUpdateArgs>(args: SelectSubset<T, WishListUpdateArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WishLists.
     * @param {WishListDeleteManyArgs} args - Arguments to filter WishLists to delete.
     * @example
     * // Delete a few WishLists
     * const { count } = await prisma.wishList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishListDeleteManyArgs>(args?: SelectSubset<T, WishListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WishLists
     * const wishList = await prisma.wishList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishListUpdateManyArgs>(args: SelectSubset<T, WishListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishLists and returns the data updated in the database.
     * @param {WishListUpdateManyAndReturnArgs} args - Arguments to update many WishLists.
     * @example
     * // Update many WishLists
     * const wishList = await prisma.wishList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WishLists and only return the `id`
     * const wishListWithIdOnly = await prisma.wishList.updateManyAndReturn({
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
    updateManyAndReturn<T extends WishListUpdateManyAndReturnArgs>(args: SelectSubset<T, WishListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WishList.
     * @param {WishListUpsertArgs} args - Arguments to update or create a WishList.
     * @example
     * // Update or create a WishList
     * const wishList = await prisma.wishList.upsert({
     *   create: {
     *     // ... data to create a WishList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WishList we want to update
     *   }
     * })
     */
    upsert<T extends WishListUpsertArgs>(args: SelectSubset<T, WishListUpsertArgs<ExtArgs>>): Prisma__WishListClient<$Result.GetResult<Prisma.$WishListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WishLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListCountArgs} args - Arguments to filter WishLists to count.
     * @example
     * // Count the number of WishLists
     * const count = await prisma.wishList.count({
     *   where: {
     *     // ... the filter for the WishLists we want to count
     *   }
     * })
    **/
    count<T extends WishListCountArgs>(
      args?: Subset<T, WishListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WishList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishListAggregateArgs>(args: Subset<T, WishListAggregateArgs>): Prisma.PrismaPromise<GetWishListAggregateType<T>>

    /**
     * Group by WishList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishListGroupByArgs} args - Group by arguments.
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
      T extends WishListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishListGroupByArgs['orderBy'] }
        : { orderBy?: WishListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WishList model
   */
  readonly fields: WishListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WishList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends WishList$userArgs<ExtArgs> = {}>(args?: Subset<T, WishList$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cargo<T extends WishList$cargoArgs<ExtArgs> = {}>(args?: Subset<T, WishList$cargoArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WishList model
   */
  interface WishListFieldRefs {
    readonly id: FieldRef<"WishList", 'String'>
    readonly createdAt: FieldRef<"WishList", 'DateTime'>
    readonly updatedAt: FieldRef<"WishList", 'DateTime'>
    readonly userId: FieldRef<"WishList", 'String'>
    readonly cargoId: FieldRef<"WishList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WishList findUnique
   */
  export type WishListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter, which WishList to fetch.
     */
    where: WishListWhereUniqueInput
  }

  /**
   * WishList findUniqueOrThrow
   */
  export type WishListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter, which WishList to fetch.
     */
    where: WishListWhereUniqueInput
  }

  /**
   * WishList findFirst
   */
  export type WishListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter, which WishList to fetch.
     */
    where?: WishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishLists to fetch.
     */
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishLists.
     */
    cursor?: WishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishLists.
     */
    distinct?: WishListScalarFieldEnum | WishListScalarFieldEnum[]
  }

  /**
   * WishList findFirstOrThrow
   */
  export type WishListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter, which WishList to fetch.
     */
    where?: WishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishLists to fetch.
     */
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishLists.
     */
    cursor?: WishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishLists.
     */
    distinct?: WishListScalarFieldEnum | WishListScalarFieldEnum[]
  }

  /**
   * WishList findMany
   */
  export type WishListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter, which WishLists to fetch.
     */
    where?: WishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishLists to fetch.
     */
    orderBy?: WishListOrderByWithRelationInput | WishListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WishLists.
     */
    cursor?: WishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishLists.
     */
    skip?: number
    distinct?: WishListScalarFieldEnum | WishListScalarFieldEnum[]
  }

  /**
   * WishList create
   */
  export type WishListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * The data needed to create a WishList.
     */
    data: XOR<WishListCreateInput, WishListUncheckedCreateInput>
  }

  /**
   * WishList createMany
   */
  export type WishListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WishLists.
     */
    data: WishListCreateManyInput | WishListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WishList createManyAndReturn
   */
  export type WishListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * The data used to create many WishLists.
     */
    data: WishListCreateManyInput | WishListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishList update
   */
  export type WishListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * The data needed to update a WishList.
     */
    data: XOR<WishListUpdateInput, WishListUncheckedUpdateInput>
    /**
     * Choose, which WishList to update.
     */
    where: WishListWhereUniqueInput
  }

  /**
   * WishList updateMany
   */
  export type WishListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WishLists.
     */
    data: XOR<WishListUpdateManyMutationInput, WishListUncheckedUpdateManyInput>
    /**
     * Filter which WishLists to update
     */
    where?: WishListWhereInput
    /**
     * Limit how many WishLists to update.
     */
    limit?: number
  }

  /**
   * WishList updateManyAndReturn
   */
  export type WishListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * The data used to update WishLists.
     */
    data: XOR<WishListUpdateManyMutationInput, WishListUncheckedUpdateManyInput>
    /**
     * Filter which WishLists to update
     */
    where?: WishListWhereInput
    /**
     * Limit how many WishLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishList upsert
   */
  export type WishListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * The filter to search for the WishList to update in case it exists.
     */
    where: WishListWhereUniqueInput
    /**
     * In case the WishList found by the `where` argument doesn't exist, create a new WishList with this data.
     */
    create: XOR<WishListCreateInput, WishListUncheckedCreateInput>
    /**
     * In case the WishList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishListUpdateInput, WishListUncheckedUpdateInput>
  }

  /**
   * WishList delete
   */
  export type WishListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
    /**
     * Filter which WishList to delete.
     */
    where: WishListWhereUniqueInput
  }

  /**
   * WishList deleteMany
   */
  export type WishListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishLists to delete
     */
    where?: WishListWhereInput
    /**
     * Limit how many WishLists to delete.
     */
    limit?: number
  }

  /**
   * WishList.user
   */
  export type WishList$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WishList.cargo
   */
  export type WishList$cargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
  }

  /**
   * WishList without action
   */
  export type WishListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishList
     */
    select?: WishListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishList
     */
    omit?: WishListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishListInclude<ExtArgs> | null
  }


  /**
   * Model CurrencyRate
   */

  export type AggregateCurrencyRate = {
    _count: CurrencyRateCountAggregateOutputType | null
    _min: CurrencyRateMinAggregateOutputType | null
    _max: CurrencyRateMaxAggregateOutputType | null
  }

  export type CurrencyRateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    rate: string | null
  }

  export type CurrencyRateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    rate: string | null
  }

  export type CurrencyRateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    rate: number
    _all: number
  }


  export type CurrencyRateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    rate?: true
  }

  export type CurrencyRateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    rate?: true
  }

  export type CurrencyRateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    rate?: true
    _all?: true
  }

  export type CurrencyRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyRate to aggregate.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrencyRates
    **/
    _count?: true | CurrencyRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyRateMaxAggregateInputType
  }

  export type GetCurrencyRateAggregateType<T extends CurrencyRateAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencyRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencyRate[P]>
      : GetScalarType<T[P], AggregateCurrencyRate[P]>
  }




  export type CurrencyRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyRateWhereInput
    orderBy?: CurrencyRateOrderByWithAggregationInput | CurrencyRateOrderByWithAggregationInput[]
    by: CurrencyRateScalarFieldEnum[] | CurrencyRateScalarFieldEnum
    having?: CurrencyRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyRateCountAggregateInputType | true
    _min?: CurrencyRateMinAggregateInputType
    _max?: CurrencyRateMaxAggregateInputType
  }

  export type CurrencyRateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    rate: string
    _count: CurrencyRateCountAggregateOutputType | null
    _min: CurrencyRateMinAggregateOutputType | null
    _max: CurrencyRateMaxAggregateOutputType | null
  }

  type GetCurrencyRateGroupByPayload<T extends CurrencyRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyRateGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyRateGroupByOutputType[P]>
        }
      >
    >


  export type CurrencyRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    rate?: boolean
  }, ExtArgs["result"]["currencyRate"]>

  export type CurrencyRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    rate?: boolean
  }, ExtArgs["result"]["currencyRate"]>

  export type CurrencyRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    rate?: boolean
  }, ExtArgs["result"]["currencyRate"]>

  export type CurrencyRateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    rate?: boolean
  }

  export type CurrencyRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "rate", ExtArgs["result"]["currencyRate"]>

  export type $CurrencyRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrencyRate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      rate: string
    }, ExtArgs["result"]["currencyRate"]>
    composites: {}
  }

  type CurrencyRateGetPayload<S extends boolean | null | undefined | CurrencyRateDefaultArgs> = $Result.GetResult<Prisma.$CurrencyRatePayload, S>

  type CurrencyRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyRateCountAggregateInputType | true
    }

  export interface CurrencyRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrencyRate'], meta: { name: 'CurrencyRate' } }
    /**
     * Find zero or one CurrencyRate that matches the filter.
     * @param {CurrencyRateFindUniqueArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyRateFindUniqueArgs>(args: SelectSubset<T, CurrencyRateFindUniqueArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurrencyRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyRateFindUniqueOrThrowArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyRateFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrencyRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindFirstArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyRateFindFirstArgs>(args?: SelectSubset<T, CurrencyRateFindFirstArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrencyRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindFirstOrThrowArgs} args - Arguments to find a CurrencyRate
     * @example
     * // Get one CurrencyRate
     * const currencyRate = await prisma.currencyRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyRateFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrencyRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrencyRates
     * const currencyRates = await prisma.currencyRate.findMany()
     * 
     * // Get first 10 CurrencyRates
     * const currencyRates = await prisma.currencyRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyRateWithIdOnly = await prisma.currencyRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyRateFindManyArgs>(args?: SelectSubset<T, CurrencyRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurrencyRate.
     * @param {CurrencyRateCreateArgs} args - Arguments to create a CurrencyRate.
     * @example
     * // Create one CurrencyRate
     * const CurrencyRate = await prisma.currencyRate.create({
     *   data: {
     *     // ... data to create a CurrencyRate
     *   }
     * })
     * 
     */
    create<T extends CurrencyRateCreateArgs>(args: SelectSubset<T, CurrencyRateCreateArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurrencyRates.
     * @param {CurrencyRateCreateManyArgs} args - Arguments to create many CurrencyRates.
     * @example
     * // Create many CurrencyRates
     * const currencyRate = await prisma.currencyRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyRateCreateManyArgs>(args?: SelectSubset<T, CurrencyRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurrencyRates and returns the data saved in the database.
     * @param {CurrencyRateCreateManyAndReturnArgs} args - Arguments to create many CurrencyRates.
     * @example
     * // Create many CurrencyRates
     * const currencyRate = await prisma.currencyRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurrencyRates and only return the `id`
     * const currencyRateWithIdOnly = await prisma.currencyRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyRateCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurrencyRate.
     * @param {CurrencyRateDeleteArgs} args - Arguments to delete one CurrencyRate.
     * @example
     * // Delete one CurrencyRate
     * const CurrencyRate = await prisma.currencyRate.delete({
     *   where: {
     *     // ... filter to delete one CurrencyRate
     *   }
     * })
     * 
     */
    delete<T extends CurrencyRateDeleteArgs>(args: SelectSubset<T, CurrencyRateDeleteArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurrencyRate.
     * @param {CurrencyRateUpdateArgs} args - Arguments to update one CurrencyRate.
     * @example
     * // Update one CurrencyRate
     * const currencyRate = await prisma.currencyRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyRateUpdateArgs>(args: SelectSubset<T, CurrencyRateUpdateArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurrencyRates.
     * @param {CurrencyRateDeleteManyArgs} args - Arguments to filter CurrencyRates to delete.
     * @example
     * // Delete a few CurrencyRates
     * const { count } = await prisma.currencyRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyRateDeleteManyArgs>(args?: SelectSubset<T, CurrencyRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrencyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrencyRates
     * const currencyRate = await prisma.currencyRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyRateUpdateManyArgs>(args: SelectSubset<T, CurrencyRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrencyRates and returns the data updated in the database.
     * @param {CurrencyRateUpdateManyAndReturnArgs} args - Arguments to update many CurrencyRates.
     * @example
     * // Update many CurrencyRates
     * const currencyRate = await prisma.currencyRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurrencyRates and only return the `id`
     * const currencyRateWithIdOnly = await prisma.currencyRate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CurrencyRateUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurrencyRate.
     * @param {CurrencyRateUpsertArgs} args - Arguments to update or create a CurrencyRate.
     * @example
     * // Update or create a CurrencyRate
     * const currencyRate = await prisma.currencyRate.upsert({
     *   create: {
     *     // ... data to create a CurrencyRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrencyRate we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyRateUpsertArgs>(args: SelectSubset<T, CurrencyRateUpsertArgs<ExtArgs>>): Prisma__CurrencyRateClient<$Result.GetResult<Prisma.$CurrencyRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurrencyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateCountArgs} args - Arguments to filter CurrencyRates to count.
     * @example
     * // Count the number of CurrencyRates
     * const count = await prisma.currencyRate.count({
     *   where: {
     *     // ... the filter for the CurrencyRates we want to count
     *   }
     * })
    **/
    count<T extends CurrencyRateCountArgs>(
      args?: Subset<T, CurrencyRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrencyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyRateAggregateArgs>(args: Subset<T, CurrencyRateAggregateArgs>): Prisma.PrismaPromise<GetCurrencyRateAggregateType<T>>

    /**
     * Group by CurrencyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyRateGroupByArgs} args - Group by arguments.
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
      T extends CurrencyRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyRateGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrencyRate model
   */
  readonly fields: CurrencyRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrencyRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CurrencyRate model
   */
  interface CurrencyRateFieldRefs {
    readonly id: FieldRef<"CurrencyRate", 'String'>
    readonly createdAt: FieldRef<"CurrencyRate", 'DateTime'>
    readonly updatedAt: FieldRef<"CurrencyRate", 'DateTime'>
    readonly title: FieldRef<"CurrencyRate", 'String'>
    readonly rate: FieldRef<"CurrencyRate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CurrencyRate findUnique
   */
  export type CurrencyRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate findUniqueOrThrow
   */
  export type CurrencyRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate findFirst
   */
  export type CurrencyRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyRates.
     */
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate findFirstOrThrow
   */
  export type CurrencyRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRate to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyRates.
     */
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate findMany
   */
  export type CurrencyRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter, which CurrencyRates to fetch.
     */
    where?: CurrencyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyRates to fetch.
     */
    orderBy?: CurrencyRateOrderByWithRelationInput | CurrencyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrencyRates.
     */
    cursor?: CurrencyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyRates.
     */
    skip?: number
    distinct?: CurrencyRateScalarFieldEnum | CurrencyRateScalarFieldEnum[]
  }

  /**
   * CurrencyRate create
   */
  export type CurrencyRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data needed to create a CurrencyRate.
     */
    data: XOR<CurrencyRateCreateInput, CurrencyRateUncheckedCreateInput>
  }

  /**
   * CurrencyRate createMany
   */
  export type CurrencyRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrencyRates.
     */
    data: CurrencyRateCreateManyInput | CurrencyRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrencyRate createManyAndReturn
   */
  export type CurrencyRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data used to create many CurrencyRates.
     */
    data: CurrencyRateCreateManyInput | CurrencyRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrencyRate update
   */
  export type CurrencyRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data needed to update a CurrencyRate.
     */
    data: XOR<CurrencyRateUpdateInput, CurrencyRateUncheckedUpdateInput>
    /**
     * Choose, which CurrencyRate to update.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate updateMany
   */
  export type CurrencyRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrencyRates.
     */
    data: XOR<CurrencyRateUpdateManyMutationInput, CurrencyRateUncheckedUpdateManyInput>
    /**
     * Filter which CurrencyRates to update
     */
    where?: CurrencyRateWhereInput
    /**
     * Limit how many CurrencyRates to update.
     */
    limit?: number
  }

  /**
   * CurrencyRate updateManyAndReturn
   */
  export type CurrencyRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The data used to update CurrencyRates.
     */
    data: XOR<CurrencyRateUpdateManyMutationInput, CurrencyRateUncheckedUpdateManyInput>
    /**
     * Filter which CurrencyRates to update
     */
    where?: CurrencyRateWhereInput
    /**
     * Limit how many CurrencyRates to update.
     */
    limit?: number
  }

  /**
   * CurrencyRate upsert
   */
  export type CurrencyRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * The filter to search for the CurrencyRate to update in case it exists.
     */
    where: CurrencyRateWhereUniqueInput
    /**
     * In case the CurrencyRate found by the `where` argument doesn't exist, create a new CurrencyRate with this data.
     */
    create: XOR<CurrencyRateCreateInput, CurrencyRateUncheckedCreateInput>
    /**
     * In case the CurrencyRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyRateUpdateInput, CurrencyRateUncheckedUpdateInput>
  }

  /**
   * CurrencyRate delete
   */
  export type CurrencyRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
    /**
     * Filter which CurrencyRate to delete.
     */
    where: CurrencyRateWhereUniqueInput
  }

  /**
   * CurrencyRate deleteMany
   */
  export type CurrencyRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyRates to delete
     */
    where?: CurrencyRateWhereInput
    /**
     * Limit how many CurrencyRates to delete.
     */
    limit?: number
  }

  /**
   * CurrencyRate without action
   */
  export type CurrencyRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyRate
     */
    select?: CurrencyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrencyRate
     */
    omit?: CurrencyRateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    phone: 'phone',
    hash: 'hash',
    name: 'name',
    surname: 'surname',
    city: 'city',
    avatar: 'avatar',
    role: 'role',
    whatsappNumbers: 'whatsappNumbers',
    telegramNumbers: 'telegramNumbers',
    viberNumbers: 'viberNumbers',
    skypeNumbers: 'skypeNumbers',
    otherNumbers: 'otherNumbers',
    subscriptionStartDate: 'subscriptionStartDate',
    subscriptionEndDate: 'subscriptionEndDate',
    subscriptionStatus: 'subscriptionStatus',
    isVerified: 'isVerified',
    isBlocked: 'isBlocked',
    documents: 'documents'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    price: 'price',
    currency: 'currency',
    note: 'note',
    placesLoading: 'placesLoading',
    placesUnloading: 'placesUnloading',
    distance: 'distance',
    tariff: 'tariff',
    routeLink: 'routeLink',
    weight: 'weight',
    volume: 'volume',
    periodDays: 'periodDays',
    startDate: 'startDate',
    endDate: 'endDate',
    isArchived: 'isArchived',
    archivedDate: 'archivedDate',
    truckType: 'truckType',
    loadingType: 'loadingType',
    paymentMethod: 'paymentMethod',
    paymentPeriod: 'paymentPeriod',
    paymentOther: 'paymentOther',
    paymentPrepaymentPercent: 'paymentPrepaymentPercent',
    paymentDeferredDays: 'paymentDeferredDays',
    optionDocuments: 'optionDocuments',
    optionDocumentsAdr: 'optionDocumentsAdr',
    optionLoadings: 'optionLoadings',
    optionLoadingsTimeLoading: 'optionLoadingsTimeLoading',
    optionLoadingsTimeUnloading: 'optionLoadingsTimeUnloading',
    optionLoadingsDateUnloading: 'optionLoadingsDateUnloading',
    optionLoadingsPlaceLoading: 'optionLoadingsPlaceLoading',
    optionLoadingsPlaceUnloading: 'optionLoadingsPlaceUnloading',
    optionLoadingsBigBag: 'optionLoadingsBigBag',
    optionTerms: 'optionTerms',
    optionTermsTemperature: 'optionTermsTemperature',
    optionTermsQtyPallets: 'optionTermsQtyPallets',
    optionTermsCorners: 'optionTermsCorners',
    optionTermsBelts: 'optionTermsBelts',
    optionTermsPalletsType: 'optionTermsPalletsType',
    optionAdditionally: 'optionAdditionally',
    userId: 'userId',
    userName: 'userName',
    userPhone: 'userPhone',
    viewsId: 'viewsId'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    count: 'count'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const WishListScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    cargoId: 'cargoId'
  };

  export type WishListScalarFieldEnum = (typeof WishListScalarFieldEnum)[keyof typeof WishListScalarFieldEnum]


  export const CurrencyRateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    rate: 'rate'
  };

  export type CurrencyRateScalarFieldEnum = (typeof CurrencyRateScalarFieldEnum)[keyof typeof CurrencyRateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TruckType[]'
   */
  export type ListEnumTruckTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckType[]'>
    


  /**
   * Reference to a field of type 'TruckType'
   */
  export type EnumTruckTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TruckType'>
    


  /**
   * Reference to a field of type 'LoadingType[]'
   */
  export type ListEnumLoadingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoadingType[]'>
    


  /**
   * Reference to a field of type 'LoadingType'
   */
  export type EnumLoadingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoadingType'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentPeriod[]'
   */
  export type ListEnumPaymentPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPeriod[]'>
    


  /**
   * Reference to a field of type 'PaymentPeriod'
   */
  export type EnumPaymentPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPeriod'>
    


  /**
   * Reference to a field of type 'PaymentOther[]'
   */
  export type ListEnumPaymentOtherFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentOther[]'>
    


  /**
   * Reference to a field of type 'PaymentOther'
   */
  export type EnumPaymentOtherFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentOther'>
    


  /**
   * Reference to a field of type 'Documents[]'
   */
  export type ListEnumDocumentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Documents[]'>
    


  /**
   * Reference to a field of type 'Documents'
   */
  export type EnumDocumentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Documents'>
    


  /**
   * Reference to a field of type 'DocumentsAdr'
   */
  export type EnumDocumentsAdrFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentsAdr'>
    


  /**
   * Reference to a field of type 'DocumentsAdr[]'
   */
  export type ListEnumDocumentsAdrFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentsAdr[]'>
    


  /**
   * Reference to a field of type 'Loadings[]'
   */
  export type ListEnumLoadingsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Loadings[]'>
    


  /**
   * Reference to a field of type 'Loadings'
   */
  export type EnumLoadingsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Loadings'>
    


  /**
   * Reference to a field of type 'Terms[]'
   */
  export type ListEnumTermsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Terms[]'>
    


  /**
   * Reference to a field of type 'Terms'
   */
  export type EnumTermsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Terms'>
    


  /**
   * Reference to a field of type 'TermsPalletsType'
   */
  export type EnumTermsPalletsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermsPalletsType'>
    


  /**
   * Reference to a field of type 'TermsPalletsType[]'
   */
  export type ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermsPalletsType[]'>
    


  /**
   * Reference to a field of type 'Additionally[]'
   */
  export type ListEnumAdditionallyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Additionally[]'>
    


  /**
   * Reference to a field of type 'Additionally'
   */
  export type EnumAdditionallyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Additionally'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    whatsappNumbers?: StringNullableListFilter<"User">
    telegramNumbers?: StringNullableListFilter<"User">
    viberNumbers?: StringNullableListFilter<"User">
    skypeNumbers?: StringNullableListFilter<"User">
    otherNumbers?: StringNullableListFilter<"User">
    subscriptionStartDate?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionEndDate?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionStatus?: BoolNullableFilter<"User"> | boolean | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    isBlocked?: BoolNullableFilter<"User"> | boolean | null
    documents?: StringNullableListFilter<"User">
    cargos?: CargoListRelationFilter
    wishList?: WishListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hash?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    whatsappNumbers?: SortOrder
    telegramNumbers?: SortOrder
    viberNumbers?: SortOrder
    skypeNumbers?: SortOrder
    otherNumbers?: SortOrder
    subscriptionStartDate?: SortOrderInput | SortOrder
    subscriptionEndDate?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    isBlocked?: SortOrderInput | SortOrder
    documents?: SortOrder
    cargos?: CargoOrderByRelationAggregateInput
    wishList?: WishListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    whatsappNumbers?: StringNullableListFilter<"User">
    telegramNumbers?: StringNullableListFilter<"User">
    viberNumbers?: StringNullableListFilter<"User">
    skypeNumbers?: StringNullableListFilter<"User">
    otherNumbers?: StringNullableListFilter<"User">
    subscriptionStartDate?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionEndDate?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionStatus?: BoolNullableFilter<"User"> | boolean | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    isBlocked?: BoolNullableFilter<"User"> | boolean | null
    documents?: StringNullableListFilter<"User">
    cargos?: CargoListRelationFilter
    wishList?: WishListListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hash?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    whatsappNumbers?: SortOrder
    telegramNumbers?: SortOrder
    viberNumbers?: SortOrder
    skypeNumbers?: SortOrder
    otherNumbers?: SortOrder
    subscriptionStartDate?: SortOrderInput | SortOrder
    subscriptionEndDate?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    isBlocked?: SortOrderInput | SortOrder
    documents?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    hash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    whatsappNumbers?: StringNullableListFilter<"User">
    telegramNumbers?: StringNullableListFilter<"User">
    viberNumbers?: StringNullableListFilter<"User">
    skypeNumbers?: StringNullableListFilter<"User">
    otherNumbers?: StringNullableListFilter<"User">
    subscriptionStartDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subscriptionEndDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subscriptionStatus?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    isVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    isBlocked?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    documents?: StringNullableListFilter<"User">
  }

  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    id?: StringFilter<"Cargo"> | string
    createdAt?: DateTimeFilter<"Cargo"> | Date | string
    updatedAt?: DateTimeFilter<"Cargo"> | Date | string
    title?: StringFilter<"Cargo"> | string
    price?: IntFilter<"Cargo"> | number
    currency?: EnumCurrencyFilter<"Cargo"> | $Enums.Currency
    note?: StringNullableFilter<"Cargo"> | string | null
    placesLoading?: StringNullableListFilter<"Cargo">
    placesUnloading?: StringNullableListFilter<"Cargo">
    distance?: IntNullableFilter<"Cargo"> | number | null
    tariff?: IntNullableFilter<"Cargo"> | number | null
    routeLink?: StringNullableFilter<"Cargo"> | string | null
    weight?: FloatFilter<"Cargo"> | number
    volume?: FloatFilter<"Cargo"> | number
    periodDays?: IntFilter<"Cargo"> | number
    startDate?: DateTimeFilter<"Cargo"> | Date | string
    endDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    isArchived?: BoolNullableFilter<"Cargo"> | boolean | null
    archivedDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    truckType?: EnumTruckTypeNullableListFilter<"Cargo">
    loadingType?: EnumLoadingTypeNullableListFilter<"Cargo">
    paymentMethod?: EnumPaymentMethodNullableListFilter<"Cargo">
    paymentPeriod?: EnumPaymentPeriodNullableListFilter<"Cargo">
    paymentOther?: EnumPaymentOtherNullableListFilter<"Cargo">
    paymentPrepaymentPercent?: StringNullableFilter<"Cargo"> | string | null
    paymentDeferredDays?: StringNullableFilter<"Cargo"> | string | null
    optionDocuments?: EnumDocumentsNullableListFilter<"Cargo">
    optionDocumentsAdr?: EnumDocumentsAdrNullableFilter<"Cargo"> | $Enums.DocumentsAdr | null
    optionLoadings?: EnumLoadingsNullableListFilter<"Cargo">
    optionLoadingsTimeLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsTimeUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsDateUnloading?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    optionLoadingsPlaceLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsPlaceUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsBigBag?: StringNullableFilter<"Cargo"> | string | null
    optionTerms?: EnumTermsNullableListFilter<"Cargo">
    optionTermsTemperature?: StringNullableFilter<"Cargo"> | string | null
    optionTermsQtyPallets?: StringNullableFilter<"Cargo"> | string | null
    optionTermsCorners?: StringNullableFilter<"Cargo"> | string | null
    optionTermsBelts?: StringNullableFilter<"Cargo"> | string | null
    optionTermsPalletsType?: EnumTermsPalletsTypeNullableFilter<"Cargo"> | $Enums.TermsPalletsType | null
    optionAdditionally?: EnumAdditionallyNullableListFilter<"Cargo">
    userId?: StringNullableFilter<"Cargo"> | string | null
    userName?: StringNullableFilter<"Cargo"> | string | null
    userPhone?: StringNullableFilter<"Cargo"> | string | null
    viewsId?: StringNullableFilter<"Cargo"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    views?: XOR<ViewsNullableScalarRelationFilter, ViewsWhereInput> | null
    wishList?: WishListListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    note?: SortOrderInput | SortOrder
    placesLoading?: SortOrder
    placesUnloading?: SortOrder
    distance?: SortOrderInput | SortOrder
    tariff?: SortOrderInput | SortOrder
    routeLink?: SortOrderInput | SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isArchived?: SortOrderInput | SortOrder
    archivedDate?: SortOrderInput | SortOrder
    truckType?: SortOrder
    loadingType?: SortOrder
    paymentMethod?: SortOrder
    paymentPeriod?: SortOrder
    paymentOther?: SortOrder
    paymentPrepaymentPercent?: SortOrderInput | SortOrder
    paymentDeferredDays?: SortOrderInput | SortOrder
    optionDocuments?: SortOrder
    optionDocumentsAdr?: SortOrderInput | SortOrder
    optionLoadings?: SortOrder
    optionLoadingsTimeLoading?: SortOrderInput | SortOrder
    optionLoadingsTimeUnloading?: SortOrderInput | SortOrder
    optionLoadingsDateUnloading?: SortOrderInput | SortOrder
    optionLoadingsPlaceLoading?: SortOrderInput | SortOrder
    optionLoadingsPlaceUnloading?: SortOrderInput | SortOrder
    optionLoadingsBigBag?: SortOrderInput | SortOrder
    optionTerms?: SortOrder
    optionTermsTemperature?: SortOrderInput | SortOrder
    optionTermsQtyPallets?: SortOrderInput | SortOrder
    optionTermsCorners?: SortOrderInput | SortOrder
    optionTermsBelts?: SortOrderInput | SortOrder
    optionTermsPalletsType?: SortOrderInput | SortOrder
    optionAdditionally?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    viewsId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    views?: ViewsOrderByWithRelationInput
    wishList?: WishListOrderByRelationAggregateInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    createdAt?: DateTimeFilter<"Cargo"> | Date | string
    updatedAt?: DateTimeFilter<"Cargo"> | Date | string
    title?: StringFilter<"Cargo"> | string
    price?: IntFilter<"Cargo"> | number
    currency?: EnumCurrencyFilter<"Cargo"> | $Enums.Currency
    note?: StringNullableFilter<"Cargo"> | string | null
    placesLoading?: StringNullableListFilter<"Cargo">
    placesUnloading?: StringNullableListFilter<"Cargo">
    distance?: IntNullableFilter<"Cargo"> | number | null
    tariff?: IntNullableFilter<"Cargo"> | number | null
    routeLink?: StringNullableFilter<"Cargo"> | string | null
    weight?: FloatFilter<"Cargo"> | number
    volume?: FloatFilter<"Cargo"> | number
    periodDays?: IntFilter<"Cargo"> | number
    startDate?: DateTimeFilter<"Cargo"> | Date | string
    endDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    isArchived?: BoolNullableFilter<"Cargo"> | boolean | null
    archivedDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    truckType?: EnumTruckTypeNullableListFilter<"Cargo">
    loadingType?: EnumLoadingTypeNullableListFilter<"Cargo">
    paymentMethod?: EnumPaymentMethodNullableListFilter<"Cargo">
    paymentPeriod?: EnumPaymentPeriodNullableListFilter<"Cargo">
    paymentOther?: EnumPaymentOtherNullableListFilter<"Cargo">
    paymentPrepaymentPercent?: StringNullableFilter<"Cargo"> | string | null
    paymentDeferredDays?: StringNullableFilter<"Cargo"> | string | null
    optionDocuments?: EnumDocumentsNullableListFilter<"Cargo">
    optionDocumentsAdr?: EnumDocumentsAdrNullableFilter<"Cargo"> | $Enums.DocumentsAdr | null
    optionLoadings?: EnumLoadingsNullableListFilter<"Cargo">
    optionLoadingsTimeLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsTimeUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsDateUnloading?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    optionLoadingsPlaceLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsPlaceUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsBigBag?: StringNullableFilter<"Cargo"> | string | null
    optionTerms?: EnumTermsNullableListFilter<"Cargo">
    optionTermsTemperature?: StringNullableFilter<"Cargo"> | string | null
    optionTermsQtyPallets?: StringNullableFilter<"Cargo"> | string | null
    optionTermsCorners?: StringNullableFilter<"Cargo"> | string | null
    optionTermsBelts?: StringNullableFilter<"Cargo"> | string | null
    optionTermsPalletsType?: EnumTermsPalletsTypeNullableFilter<"Cargo"> | $Enums.TermsPalletsType | null
    optionAdditionally?: EnumAdditionallyNullableListFilter<"Cargo">
    userId?: StringNullableFilter<"Cargo"> | string | null
    userName?: StringNullableFilter<"Cargo"> | string | null
    userPhone?: StringNullableFilter<"Cargo"> | string | null
    viewsId?: StringNullableFilter<"Cargo"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    views?: XOR<ViewsNullableScalarRelationFilter, ViewsWhereInput> | null
    wishList?: WishListListRelationFilter
  }, "id">

  export type CargoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    note?: SortOrderInput | SortOrder
    placesLoading?: SortOrder
    placesUnloading?: SortOrder
    distance?: SortOrderInput | SortOrder
    tariff?: SortOrderInput | SortOrder
    routeLink?: SortOrderInput | SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isArchived?: SortOrderInput | SortOrder
    archivedDate?: SortOrderInput | SortOrder
    truckType?: SortOrder
    loadingType?: SortOrder
    paymentMethod?: SortOrder
    paymentPeriod?: SortOrder
    paymentOther?: SortOrder
    paymentPrepaymentPercent?: SortOrderInput | SortOrder
    paymentDeferredDays?: SortOrderInput | SortOrder
    optionDocuments?: SortOrder
    optionDocumentsAdr?: SortOrderInput | SortOrder
    optionLoadings?: SortOrder
    optionLoadingsTimeLoading?: SortOrderInput | SortOrder
    optionLoadingsTimeUnloading?: SortOrderInput | SortOrder
    optionLoadingsDateUnloading?: SortOrderInput | SortOrder
    optionLoadingsPlaceLoading?: SortOrderInput | SortOrder
    optionLoadingsPlaceUnloading?: SortOrderInput | SortOrder
    optionLoadingsBigBag?: SortOrderInput | SortOrder
    optionTerms?: SortOrder
    optionTermsTemperature?: SortOrderInput | SortOrder
    optionTermsQtyPallets?: SortOrderInput | SortOrder
    optionTermsCorners?: SortOrderInput | SortOrder
    optionTermsBelts?: SortOrderInput | SortOrder
    optionTermsPalletsType?: SortOrderInput | SortOrder
    optionAdditionally?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    viewsId?: SortOrderInput | SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cargo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cargo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cargo"> | Date | string
    title?: StringWithAggregatesFilter<"Cargo"> | string
    price?: IntWithAggregatesFilter<"Cargo"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Cargo"> | $Enums.Currency
    note?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    placesLoading?: StringNullableListFilter<"Cargo">
    placesUnloading?: StringNullableListFilter<"Cargo">
    distance?: IntNullableWithAggregatesFilter<"Cargo"> | number | null
    tariff?: IntNullableWithAggregatesFilter<"Cargo"> | number | null
    routeLink?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    weight?: FloatWithAggregatesFilter<"Cargo"> | number
    volume?: FloatWithAggregatesFilter<"Cargo"> | number
    periodDays?: IntWithAggregatesFilter<"Cargo"> | number
    startDate?: DateTimeWithAggregatesFilter<"Cargo"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Cargo"> | Date | string | null
    isArchived?: BoolNullableWithAggregatesFilter<"Cargo"> | boolean | null
    archivedDate?: DateTimeNullableWithAggregatesFilter<"Cargo"> | Date | string | null
    truckType?: EnumTruckTypeNullableListFilter<"Cargo">
    loadingType?: EnumLoadingTypeNullableListFilter<"Cargo">
    paymentMethod?: EnumPaymentMethodNullableListFilter<"Cargo">
    paymentPeriod?: EnumPaymentPeriodNullableListFilter<"Cargo">
    paymentOther?: EnumPaymentOtherNullableListFilter<"Cargo">
    paymentPrepaymentPercent?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    paymentDeferredDays?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionDocuments?: EnumDocumentsNullableListFilter<"Cargo">
    optionDocumentsAdr?: EnumDocumentsAdrNullableWithAggregatesFilter<"Cargo"> | $Enums.DocumentsAdr | null
    optionLoadings?: EnumLoadingsNullableListFilter<"Cargo">
    optionLoadingsTimeLoading?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionLoadingsTimeUnloading?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionLoadingsDateUnloading?: DateTimeNullableWithAggregatesFilter<"Cargo"> | Date | string | null
    optionLoadingsPlaceLoading?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionLoadingsPlaceUnloading?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionLoadingsBigBag?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionTerms?: EnumTermsNullableListFilter<"Cargo">
    optionTermsTemperature?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionTermsQtyPallets?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionTermsCorners?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionTermsBelts?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    optionTermsPalletsType?: EnumTermsPalletsTypeNullableWithAggregatesFilter<"Cargo"> | $Enums.TermsPalletsType | null
    optionAdditionally?: EnumAdditionallyNullableListFilter<"Cargo">
    userId?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    userName?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    userPhone?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
    viewsId?: StringNullableWithAggregatesFilter<"Cargo"> | string | null
  }

  export type ViewsWhereInput = {
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    id?: StringFilter<"Views"> | string
    createdAt?: DateTimeFilter<"Views"> | Date | string
    updatedAt?: DateTimeFilter<"Views"> | Date | string
    count?: IntFilter<"Views"> | number
    cargo?: CargoListRelationFilter
  }

  export type ViewsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    count?: SortOrder
    cargo?: CargoOrderByRelationAggregateInput
  }

  export type ViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    createdAt?: DateTimeFilter<"Views"> | Date | string
    updatedAt?: DateTimeFilter<"Views"> | Date | string
    count?: IntFilter<"Views"> | number
    cargo?: CargoListRelationFilter
  }, "id">

  export type ViewsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    count?: SortOrder
    _count?: ViewsCountOrderByAggregateInput
    _avg?: ViewsAvgOrderByAggregateInput
    _max?: ViewsMaxOrderByAggregateInput
    _min?: ViewsMinOrderByAggregateInput
    _sum?: ViewsSumOrderByAggregateInput
  }

  export type ViewsScalarWhereWithAggregatesInput = {
    AND?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    OR?: ViewsScalarWhereWithAggregatesInput[]
    NOT?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Views"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Views"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Views"> | Date | string
    count?: IntWithAggregatesFilter<"Views"> | number
  }

  export type WishListWhereInput = {
    AND?: WishListWhereInput | WishListWhereInput[]
    OR?: WishListWhereInput[]
    NOT?: WishListWhereInput | WishListWhereInput[]
    id?: StringFilter<"WishList"> | string
    createdAt?: DateTimeFilter<"WishList"> | Date | string
    updatedAt?: DateTimeFilter<"WishList"> | Date | string
    userId?: StringNullableFilter<"WishList"> | string | null
    cargoId?: StringNullableFilter<"WishList"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cargo?: XOR<CargoNullableScalarRelationFilter, CargoWhereInput> | null
  }

  export type WishListOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    cargoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    cargo?: CargoOrderByWithRelationInput
  }

  export type WishListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_cargoId?: WishListUserIdCargoIdCompoundUniqueInput
    AND?: WishListWhereInput | WishListWhereInput[]
    OR?: WishListWhereInput[]
    NOT?: WishListWhereInput | WishListWhereInput[]
    createdAt?: DateTimeFilter<"WishList"> | Date | string
    updatedAt?: DateTimeFilter<"WishList"> | Date | string
    userId?: StringNullableFilter<"WishList"> | string | null
    cargoId?: StringNullableFilter<"WishList"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cargo?: XOR<CargoNullableScalarRelationFilter, CargoWhereInput> | null
  }, "id" | "userId_cargoId">

  export type WishListOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    cargoId?: SortOrderInput | SortOrder
    _count?: WishListCountOrderByAggregateInput
    _max?: WishListMaxOrderByAggregateInput
    _min?: WishListMinOrderByAggregateInput
  }

  export type WishListScalarWhereWithAggregatesInput = {
    AND?: WishListScalarWhereWithAggregatesInput | WishListScalarWhereWithAggregatesInput[]
    OR?: WishListScalarWhereWithAggregatesInput[]
    NOT?: WishListScalarWhereWithAggregatesInput | WishListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WishList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WishList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WishList"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"WishList"> | string | null
    cargoId?: StringNullableWithAggregatesFilter<"WishList"> | string | null
  }

  export type CurrencyRateWhereInput = {
    AND?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    OR?: CurrencyRateWhereInput[]
    NOT?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    id?: StringFilter<"CurrencyRate"> | string
    createdAt?: DateTimeFilter<"CurrencyRate"> | Date | string
    updatedAt?: DateTimeFilter<"CurrencyRate"> | Date | string
    title?: StringFilter<"CurrencyRate"> | string
    rate?: StringFilter<"CurrencyRate"> | string
  }

  export type CurrencyRateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    rate?: SortOrder
  }

  export type CurrencyRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    OR?: CurrencyRateWhereInput[]
    NOT?: CurrencyRateWhereInput | CurrencyRateWhereInput[]
    createdAt?: DateTimeFilter<"CurrencyRate"> | Date | string
    updatedAt?: DateTimeFilter<"CurrencyRate"> | Date | string
    rate?: StringFilter<"CurrencyRate"> | string
  }, "id" | "title">

  export type CurrencyRateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    rate?: SortOrder
    _count?: CurrencyRateCountOrderByAggregateInput
    _max?: CurrencyRateMaxOrderByAggregateInput
    _min?: CurrencyRateMinOrderByAggregateInput
  }

  export type CurrencyRateScalarWhereWithAggregatesInput = {
    AND?: CurrencyRateScalarWhereWithAggregatesInput | CurrencyRateScalarWhereWithAggregatesInput[]
    OR?: CurrencyRateScalarWhereWithAggregatesInput[]
    NOT?: CurrencyRateScalarWhereWithAggregatesInput | CurrencyRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurrencyRate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CurrencyRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CurrencyRate"> | Date | string
    title?: StringWithAggregatesFilter<"CurrencyRate"> | string
    rate?: StringWithAggregatesFilter<"CurrencyRate"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    cargos?: CargoCreateNestedManyWithoutUserInput
    wishList?: WishListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    cargos?: CargoUncheckedCreateNestedManyWithoutUserInput
    wishList?: WishListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    cargos?: CargoUpdateManyWithoutUserNestedInput
    wishList?: WishListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    cargos?: CargoUncheckedUpdateManyWithoutUserNestedInput
    wishList?: WishListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
  }

  export type CargoCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    user?: UserCreateNestedOneWithoutCargosInput
    views?: ViewsCreateNestedOneWithoutCargoInput
    wishList?: WishListCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: string | null
    userName?: string | null
    userPhone?: string | null
    viewsId?: string | null
    wishList?: WishListUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCargosNestedInput
    views?: ViewsUpdateOneWithoutCargoNestedInput
    wishList?: WishListUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    viewsId?: NullableStringFieldUpdateOperationsInput | string | null
    wishList?: WishListUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: string | null
    userName?: string | null
    userPhone?: string | null
    viewsId?: string | null
  }

  export type CargoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    viewsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViewsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    count?: number
    cargo?: CargoCreateNestedManyWithoutViewsInput
  }

  export type ViewsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    count?: number
    cargo?: CargoUncheckedCreateNestedManyWithoutViewsInput
  }

  export type ViewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cargo?: CargoUpdateManyWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    cargo?: CargoUncheckedUpdateManyWithoutViewsNestedInput
  }

  export type ViewsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    count?: number
  }

  export type ViewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ViewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type WishListCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutWishListInput
    cargo?: CargoCreateNestedOneWithoutWishListInput
  }

  export type WishListUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    cargoId?: string | null
  }

  export type WishListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutWishListNestedInput
    cargo?: CargoUpdateOneWithoutWishListNestedInput
  }

  export type WishListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishListCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    cargoId?: string | null
  }

  export type WishListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrencyRateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    rate: string
  }

  export type CurrencyRateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    rate: string
  }

  export type CurrencyRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyRateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    rate: string
  }

  export type CurrencyRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CargoListRelationFilter = {
    every?: CargoWhereInput
    some?: CargoWhereInput
    none?: CargoWhereInput
  }

  export type WishListListRelationFilter = {
    every?: WishListWhereInput
    some?: WishListWhereInput
    none?: WishListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CargoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    whatsappNumbers?: SortOrder
    telegramNumbers?: SortOrder
    viberNumbers?: SortOrder
    skypeNumbers?: SortOrder
    otherNumbers?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    subscriptionStatus?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
    documents?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    subscriptionStatus?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    subscriptionStatus?: SortOrder
    isVerified?: SortOrder
    isBlocked?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTruckTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.TruckType | EnumTruckTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.TruckType[] | ListEnumTruckTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumLoadingTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.LoadingType[] | ListEnumLoadingTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.LoadingType | EnumLoadingTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.LoadingType[] | ListEnumLoadingTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.LoadingType[] | ListEnumLoadingTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPaymentMethodNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    has?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPaymentPeriodNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPeriod[] | ListEnumPaymentPeriodFieldRefInput<$PrismaModel> | null
    has?: $Enums.PaymentPeriod | EnumPaymentPeriodFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PaymentPeriod[] | ListEnumPaymentPeriodFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PaymentPeriod[] | ListEnumPaymentPeriodFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPaymentOtherNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentOther[] | ListEnumPaymentOtherFieldRefInput<$PrismaModel> | null
    has?: $Enums.PaymentOther | EnumPaymentOtherFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PaymentOther[] | ListEnumPaymentOtherFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PaymentOther[] | ListEnumPaymentOtherFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDocumentsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Documents[] | ListEnumDocumentsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Documents | EnumDocumentsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Documents[] | ListEnumDocumentsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Documents[] | ListEnumDocumentsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDocumentsAdrNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsAdr | EnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel> | $Enums.DocumentsAdr | null
  }

  export type EnumLoadingsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Loadings[] | ListEnumLoadingsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Loadings | EnumLoadingsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Loadings[] | ListEnumLoadingsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Loadings[] | ListEnumLoadingsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTermsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Terms[] | ListEnumTermsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Terms | EnumTermsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Terms[] | ListEnumTermsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Terms[] | ListEnumTermsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTermsPalletsTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TermsPalletsType | EnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel> | $Enums.TermsPalletsType | null
  }

  export type EnumAdditionallyNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Additionally[] | ListEnumAdditionallyFieldRefInput<$PrismaModel> | null
    has?: $Enums.Additionally | EnumAdditionallyFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Additionally[] | ListEnumAdditionallyFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Additionally[] | ListEnumAdditionallyFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ViewsNullableScalarRelationFilter = {
    is?: ViewsWhereInput | null
    isNot?: ViewsWhereInput | null
  }

  export type CargoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    placesLoading?: SortOrder
    placesUnloading?: SortOrder
    distance?: SortOrder
    tariff?: SortOrder
    routeLink?: SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isArchived?: SortOrder
    archivedDate?: SortOrder
    truckType?: SortOrder
    loadingType?: SortOrder
    paymentMethod?: SortOrder
    paymentPeriod?: SortOrder
    paymentOther?: SortOrder
    paymentPrepaymentPercent?: SortOrder
    paymentDeferredDays?: SortOrder
    optionDocuments?: SortOrder
    optionDocumentsAdr?: SortOrder
    optionLoadings?: SortOrder
    optionLoadingsTimeLoading?: SortOrder
    optionLoadingsTimeUnloading?: SortOrder
    optionLoadingsDateUnloading?: SortOrder
    optionLoadingsPlaceLoading?: SortOrder
    optionLoadingsPlaceUnloading?: SortOrder
    optionLoadingsBigBag?: SortOrder
    optionTerms?: SortOrder
    optionTermsTemperature?: SortOrder
    optionTermsQtyPallets?: SortOrder
    optionTermsCorners?: SortOrder
    optionTermsBelts?: SortOrder
    optionTermsPalletsType?: SortOrder
    optionAdditionally?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userPhone?: SortOrder
    viewsId?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    price?: SortOrder
    distance?: SortOrder
    tariff?: SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    distance?: SortOrder
    tariff?: SortOrder
    routeLink?: SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isArchived?: SortOrder
    archivedDate?: SortOrder
    paymentPrepaymentPercent?: SortOrder
    paymentDeferredDays?: SortOrder
    optionDocumentsAdr?: SortOrder
    optionLoadingsTimeLoading?: SortOrder
    optionLoadingsTimeUnloading?: SortOrder
    optionLoadingsDateUnloading?: SortOrder
    optionLoadingsPlaceLoading?: SortOrder
    optionLoadingsPlaceUnloading?: SortOrder
    optionLoadingsBigBag?: SortOrder
    optionTermsTemperature?: SortOrder
    optionTermsQtyPallets?: SortOrder
    optionTermsCorners?: SortOrder
    optionTermsBelts?: SortOrder
    optionTermsPalletsType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userPhone?: SortOrder
    viewsId?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    distance?: SortOrder
    tariff?: SortOrder
    routeLink?: SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isArchived?: SortOrder
    archivedDate?: SortOrder
    paymentPrepaymentPercent?: SortOrder
    paymentDeferredDays?: SortOrder
    optionDocumentsAdr?: SortOrder
    optionLoadingsTimeLoading?: SortOrder
    optionLoadingsTimeUnloading?: SortOrder
    optionLoadingsDateUnloading?: SortOrder
    optionLoadingsPlaceLoading?: SortOrder
    optionLoadingsPlaceUnloading?: SortOrder
    optionLoadingsBigBag?: SortOrder
    optionTermsTemperature?: SortOrder
    optionTermsQtyPallets?: SortOrder
    optionTermsCorners?: SortOrder
    optionTermsBelts?: SortOrder
    optionTermsPalletsType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userPhone?: SortOrder
    viewsId?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    price?: SortOrder
    distance?: SortOrder
    tariff?: SortOrder
    weight?: SortOrder
    volume?: SortOrder
    periodDays?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDocumentsAdrNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsAdr | EnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocumentsAdrNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocumentsAdr | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel>
    _max?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel>
  }

  export type EnumTermsPalletsTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermsPalletsType | EnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTermsPalletsTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TermsPalletsType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel>
  }

  export type ViewsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    count?: SortOrder
  }

  export type ViewsAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    count?: SortOrder
  }

  export type ViewsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    count?: SortOrder
  }

  export type ViewsSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type CargoNullableScalarRelationFilter = {
    is?: CargoWhereInput | null
    isNot?: CargoWhereInput | null
  }

  export type WishListUserIdCargoIdCompoundUniqueInput = {
    userId: string
    cargoId: string
  }

  export type WishListCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    cargoId?: SortOrder
  }

  export type WishListMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    cargoId?: SortOrder
  }

  export type WishListMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    cargoId?: SortOrder
  }

  export type CurrencyRateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    rate?: SortOrder
  }

  export type CurrencyRateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    rate?: SortOrder
  }

  export type CurrencyRateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    rate?: SortOrder
  }

  export type UserCreatewhatsappNumbersInput = {
    set: string[]
  }

  export type UserCreatetelegramNumbersInput = {
    set: string[]
  }

  export type UserCreateviberNumbersInput = {
    set: string[]
  }

  export type UserCreateskypeNumbersInput = {
    set: string[]
  }

  export type UserCreateotherNumbersInput = {
    set: string[]
  }

  export type UserCreatedocumentsInput = {
    set: string[]
  }

  export type CargoCreateNestedManyWithoutUserInput = {
    create?: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput> | CargoCreateWithoutUserInput[] | CargoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUserInput | CargoCreateOrConnectWithoutUserInput[]
    createMany?: CargoCreateManyUserInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type WishListCreateNestedManyWithoutUserInput = {
    create?: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput> | WishListCreateWithoutUserInput[] | WishListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutUserInput | WishListCreateOrConnectWithoutUserInput[]
    createMany?: WishListCreateManyUserInputEnvelope
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
  }

  export type CargoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput> | CargoCreateWithoutUserInput[] | CargoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUserInput | CargoCreateOrConnectWithoutUserInput[]
    createMany?: CargoCreateManyUserInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type WishListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput> | WishListCreateWithoutUserInput[] | WishListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutUserInput | WishListCreateOrConnectWithoutUserInput[]
    createMany?: WishListCreateManyUserInputEnvelope
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdatewhatsappNumbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatetelegramNumbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateviberNumbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateskypeNumbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateotherNumbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdatedocumentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CargoUpdateManyWithoutUserNestedInput = {
    create?: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput> | CargoCreateWithoutUserInput[] | CargoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUserInput | CargoCreateOrConnectWithoutUserInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutUserInput | CargoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CargoCreateManyUserInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutUserInput | CargoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutUserInput | CargoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type WishListUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput> | WishListCreateWithoutUserInput[] | WishListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutUserInput | WishListCreateOrConnectWithoutUserInput[]
    upsert?: WishListUpsertWithWhereUniqueWithoutUserInput | WishListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishListCreateManyUserInputEnvelope
    set?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    disconnect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    delete?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    update?: WishListUpdateWithWhereUniqueWithoutUserInput | WishListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishListUpdateManyWithWhereWithoutUserInput | WishListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishListScalarWhereInput | WishListScalarWhereInput[]
  }

  export type CargoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput> | CargoCreateWithoutUserInput[] | CargoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutUserInput | CargoCreateOrConnectWithoutUserInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutUserInput | CargoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CargoCreateManyUserInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutUserInput | CargoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutUserInput | CargoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type WishListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput> | WishListCreateWithoutUserInput[] | WishListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutUserInput | WishListCreateOrConnectWithoutUserInput[]
    upsert?: WishListUpsertWithWhereUniqueWithoutUserInput | WishListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishListCreateManyUserInputEnvelope
    set?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    disconnect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    delete?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    update?: WishListUpdateWithWhereUniqueWithoutUserInput | WishListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishListUpdateManyWithWhereWithoutUserInput | WishListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishListScalarWhereInput | WishListScalarWhereInput[]
  }

  export type CargoCreateplacesLoadingInput = {
    set: string[]
  }

  export type CargoCreateplacesUnloadingInput = {
    set: string[]
  }

  export type CargoCreatetruckTypeInput = {
    set: $Enums.TruckType[]
  }

  export type CargoCreateloadingTypeInput = {
    set: $Enums.LoadingType[]
  }

  export type CargoCreatepaymentMethodInput = {
    set: $Enums.PaymentMethod[]
  }

  export type CargoCreatepaymentPeriodInput = {
    set: $Enums.PaymentPeriod[]
  }

  export type CargoCreatepaymentOtherInput = {
    set: $Enums.PaymentOther[]
  }

  export type CargoCreateoptionDocumentsInput = {
    set: $Enums.Documents[]
  }

  export type CargoCreateoptionLoadingsInput = {
    set: $Enums.Loadings[]
  }

  export type CargoCreateoptionTermsInput = {
    set: $Enums.Terms[]
  }

  export type CargoCreateoptionAdditionallyInput = {
    set: $Enums.Additionally[]
  }

  export type UserCreateNestedOneWithoutCargosInput = {
    create?: XOR<UserCreateWithoutCargosInput, UserUncheckedCreateWithoutCargosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCargosInput
    connect?: UserWhereUniqueInput
  }

  export type ViewsCreateNestedOneWithoutCargoInput = {
    create?: XOR<ViewsCreateWithoutCargoInput, ViewsUncheckedCreateWithoutCargoInput>
    connectOrCreate?: ViewsCreateOrConnectWithoutCargoInput
    connect?: ViewsWhereUniqueInput
  }

  export type WishListCreateNestedManyWithoutCargoInput = {
    create?: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput> | WishListCreateWithoutCargoInput[] | WishListUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutCargoInput | WishListCreateOrConnectWithoutCargoInput[]
    createMany?: WishListCreateManyCargoInputEnvelope
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
  }

  export type WishListUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput> | WishListCreateWithoutCargoInput[] | WishListUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutCargoInput | WishListCreateOrConnectWithoutCargoInput[]
    createMany?: WishListCreateManyCargoInputEnvelope
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type CargoUpdateplacesLoadingInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CargoUpdateplacesUnloadingInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CargoUpdatetruckTypeInput = {
    set?: $Enums.TruckType[]
    push?: $Enums.TruckType | $Enums.TruckType[]
  }

  export type CargoUpdateloadingTypeInput = {
    set?: $Enums.LoadingType[]
    push?: $Enums.LoadingType | $Enums.LoadingType[]
  }

  export type CargoUpdatepaymentMethodInput = {
    set?: $Enums.PaymentMethod[]
    push?: $Enums.PaymentMethod | $Enums.PaymentMethod[]
  }

  export type CargoUpdatepaymentPeriodInput = {
    set?: $Enums.PaymentPeriod[]
    push?: $Enums.PaymentPeriod | $Enums.PaymentPeriod[]
  }

  export type CargoUpdatepaymentOtherInput = {
    set?: $Enums.PaymentOther[]
    push?: $Enums.PaymentOther | $Enums.PaymentOther[]
  }

  export type CargoUpdateoptionDocumentsInput = {
    set?: $Enums.Documents[]
    push?: $Enums.Documents | $Enums.Documents[]
  }

  export type NullableEnumDocumentsAdrFieldUpdateOperationsInput = {
    set?: $Enums.DocumentsAdr | null
  }

  export type CargoUpdateoptionLoadingsInput = {
    set?: $Enums.Loadings[]
    push?: $Enums.Loadings | $Enums.Loadings[]
  }

  export type CargoUpdateoptionTermsInput = {
    set?: $Enums.Terms[]
    push?: $Enums.Terms | $Enums.Terms[]
  }

  export type NullableEnumTermsPalletsTypeFieldUpdateOperationsInput = {
    set?: $Enums.TermsPalletsType | null
  }

  export type CargoUpdateoptionAdditionallyInput = {
    set?: $Enums.Additionally[]
    push?: $Enums.Additionally | $Enums.Additionally[]
  }

  export type UserUpdateOneWithoutCargosNestedInput = {
    create?: XOR<UserCreateWithoutCargosInput, UserUncheckedCreateWithoutCargosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCargosInput
    upsert?: UserUpsertWithoutCargosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCargosInput, UserUpdateWithoutCargosInput>, UserUncheckedUpdateWithoutCargosInput>
  }

  export type ViewsUpdateOneWithoutCargoNestedInput = {
    create?: XOR<ViewsCreateWithoutCargoInput, ViewsUncheckedCreateWithoutCargoInput>
    connectOrCreate?: ViewsCreateOrConnectWithoutCargoInput
    upsert?: ViewsUpsertWithoutCargoInput
    disconnect?: ViewsWhereInput | boolean
    delete?: ViewsWhereInput | boolean
    connect?: ViewsWhereUniqueInput
    update?: XOR<XOR<ViewsUpdateToOneWithWhereWithoutCargoInput, ViewsUpdateWithoutCargoInput>, ViewsUncheckedUpdateWithoutCargoInput>
  }

  export type WishListUpdateManyWithoutCargoNestedInput = {
    create?: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput> | WishListCreateWithoutCargoInput[] | WishListUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutCargoInput | WishListCreateOrConnectWithoutCargoInput[]
    upsert?: WishListUpsertWithWhereUniqueWithoutCargoInput | WishListUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: WishListCreateManyCargoInputEnvelope
    set?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    disconnect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    delete?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    update?: WishListUpdateWithWhereUniqueWithoutCargoInput | WishListUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: WishListUpdateManyWithWhereWithoutCargoInput | WishListUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: WishListScalarWhereInput | WishListScalarWhereInput[]
  }

  export type WishListUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput> | WishListCreateWithoutCargoInput[] | WishListUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: WishListCreateOrConnectWithoutCargoInput | WishListCreateOrConnectWithoutCargoInput[]
    upsert?: WishListUpsertWithWhereUniqueWithoutCargoInput | WishListUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: WishListCreateManyCargoInputEnvelope
    set?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    disconnect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    delete?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    connect?: WishListWhereUniqueInput | WishListWhereUniqueInput[]
    update?: WishListUpdateWithWhereUniqueWithoutCargoInput | WishListUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: WishListUpdateManyWithWhereWithoutCargoInput | WishListUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: WishListScalarWhereInput | WishListScalarWhereInput[]
  }

  export type CargoCreateNestedManyWithoutViewsInput = {
    create?: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput> | CargoCreateWithoutViewsInput[] | CargoUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutViewsInput | CargoCreateOrConnectWithoutViewsInput[]
    createMany?: CargoCreateManyViewsInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type CargoUncheckedCreateNestedManyWithoutViewsInput = {
    create?: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput> | CargoCreateWithoutViewsInput[] | CargoUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutViewsInput | CargoCreateOrConnectWithoutViewsInput[]
    createMany?: CargoCreateManyViewsInputEnvelope
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
  }

  export type CargoUpdateManyWithoutViewsNestedInput = {
    create?: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput> | CargoCreateWithoutViewsInput[] | CargoUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutViewsInput | CargoCreateOrConnectWithoutViewsInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutViewsInput | CargoUpsertWithWhereUniqueWithoutViewsInput[]
    createMany?: CargoCreateManyViewsInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutViewsInput | CargoUpdateWithWhereUniqueWithoutViewsInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutViewsInput | CargoUpdateManyWithWhereWithoutViewsInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type CargoUncheckedUpdateManyWithoutViewsNestedInput = {
    create?: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput> | CargoCreateWithoutViewsInput[] | CargoUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: CargoCreateOrConnectWithoutViewsInput | CargoCreateOrConnectWithoutViewsInput[]
    upsert?: CargoUpsertWithWhereUniqueWithoutViewsInput | CargoUpsertWithWhereUniqueWithoutViewsInput[]
    createMany?: CargoCreateManyViewsInputEnvelope
    set?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    disconnect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    delete?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    connect?: CargoWhereUniqueInput | CargoWhereUniqueInput[]
    update?: CargoUpdateWithWhereUniqueWithoutViewsInput | CargoUpdateWithWhereUniqueWithoutViewsInput[]
    updateMany?: CargoUpdateManyWithWhereWithoutViewsInput | CargoUpdateManyWithWhereWithoutViewsInput[]
    deleteMany?: CargoScalarWhereInput | CargoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWishListInput = {
    create?: XOR<UserCreateWithoutWishListInput, UserUncheckedCreateWithoutWishListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishListInput
    connect?: UserWhereUniqueInput
  }

  export type CargoCreateNestedOneWithoutWishListInput = {
    create?: XOR<CargoCreateWithoutWishListInput, CargoUncheckedCreateWithoutWishListInput>
    connectOrCreate?: CargoCreateOrConnectWithoutWishListInput
    connect?: CargoWhereUniqueInput
  }

  export type UserUpdateOneWithoutWishListNestedInput = {
    create?: XOR<UserCreateWithoutWishListInput, UserUncheckedCreateWithoutWishListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishListInput
    upsert?: UserUpsertWithoutWishListInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishListInput, UserUpdateWithoutWishListInput>, UserUncheckedUpdateWithoutWishListInput>
  }

  export type CargoUpdateOneWithoutWishListNestedInput = {
    create?: XOR<CargoCreateWithoutWishListInput, CargoUncheckedCreateWithoutWishListInput>
    connectOrCreate?: CargoCreateOrConnectWithoutWishListInput
    upsert?: CargoUpsertWithoutWishListInput
    disconnect?: CargoWhereInput | boolean
    delete?: CargoWhereInput | boolean
    connect?: CargoWhereUniqueInput
    update?: XOR<XOR<CargoUpdateToOneWithWhereWithoutWishListInput, CargoUpdateWithoutWishListInput>, CargoUncheckedUpdateWithoutWishListInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDocumentsAdrNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsAdr | EnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel> | $Enums.DocumentsAdr | null
  }

  export type NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TermsPalletsType | EnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel> | $Enums.TermsPalletsType | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDocumentsAdrNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsAdr | EnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocumentsAdr[] | ListEnumDocumentsAdrFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocumentsAdrNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocumentsAdr | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel>
    _max?: NestedEnumDocumentsAdrNullableFilter<$PrismaModel>
  }

  export type NestedEnumTermsPalletsTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermsPalletsType | EnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TermsPalletsType[] | ListEnumTermsPalletsTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTermsPalletsTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TermsPalletsType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTermsPalletsTypeNullableFilter<$PrismaModel>
  }

  export type CargoCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    views?: ViewsCreateNestedOneWithoutCargoInput
    wishList?: WishListCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    viewsId?: string | null
    wishList?: WishListUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoCreateOrConnectWithoutUserInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput>
  }

  export type CargoCreateManyUserInputEnvelope = {
    data: CargoCreateManyUserInput | CargoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishListCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cargo?: CargoCreateNestedOneWithoutWishListInput
  }

  export type WishListUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoId?: string | null
  }

  export type WishListCreateOrConnectWithoutUserInput = {
    where: WishListWhereUniqueInput
    create: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput>
  }

  export type WishListCreateManyUserInputEnvelope = {
    data: WishListCreateManyUserInput | WishListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CargoUpsertWithWhereUniqueWithoutUserInput = {
    where: CargoWhereUniqueInput
    update: XOR<CargoUpdateWithoutUserInput, CargoUncheckedUpdateWithoutUserInput>
    create: XOR<CargoCreateWithoutUserInput, CargoUncheckedCreateWithoutUserInput>
  }

  export type CargoUpdateWithWhereUniqueWithoutUserInput = {
    where: CargoWhereUniqueInput
    data: XOR<CargoUpdateWithoutUserInput, CargoUncheckedUpdateWithoutUserInput>
  }

  export type CargoUpdateManyWithWhereWithoutUserInput = {
    where: CargoScalarWhereInput
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyWithoutUserInput>
  }

  export type CargoScalarWhereInput = {
    AND?: CargoScalarWhereInput | CargoScalarWhereInput[]
    OR?: CargoScalarWhereInput[]
    NOT?: CargoScalarWhereInput | CargoScalarWhereInput[]
    id?: StringFilter<"Cargo"> | string
    createdAt?: DateTimeFilter<"Cargo"> | Date | string
    updatedAt?: DateTimeFilter<"Cargo"> | Date | string
    title?: StringFilter<"Cargo"> | string
    price?: IntFilter<"Cargo"> | number
    currency?: EnumCurrencyFilter<"Cargo"> | $Enums.Currency
    note?: StringNullableFilter<"Cargo"> | string | null
    placesLoading?: StringNullableListFilter<"Cargo">
    placesUnloading?: StringNullableListFilter<"Cargo">
    distance?: IntNullableFilter<"Cargo"> | number | null
    tariff?: IntNullableFilter<"Cargo"> | number | null
    routeLink?: StringNullableFilter<"Cargo"> | string | null
    weight?: FloatFilter<"Cargo"> | number
    volume?: FloatFilter<"Cargo"> | number
    periodDays?: IntFilter<"Cargo"> | number
    startDate?: DateTimeFilter<"Cargo"> | Date | string
    endDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    isArchived?: BoolNullableFilter<"Cargo"> | boolean | null
    archivedDate?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    truckType?: EnumTruckTypeNullableListFilter<"Cargo">
    loadingType?: EnumLoadingTypeNullableListFilter<"Cargo">
    paymentMethod?: EnumPaymentMethodNullableListFilter<"Cargo">
    paymentPeriod?: EnumPaymentPeriodNullableListFilter<"Cargo">
    paymentOther?: EnumPaymentOtherNullableListFilter<"Cargo">
    paymentPrepaymentPercent?: StringNullableFilter<"Cargo"> | string | null
    paymentDeferredDays?: StringNullableFilter<"Cargo"> | string | null
    optionDocuments?: EnumDocumentsNullableListFilter<"Cargo">
    optionDocumentsAdr?: EnumDocumentsAdrNullableFilter<"Cargo"> | $Enums.DocumentsAdr | null
    optionLoadings?: EnumLoadingsNullableListFilter<"Cargo">
    optionLoadingsTimeLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsTimeUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsDateUnloading?: DateTimeNullableFilter<"Cargo"> | Date | string | null
    optionLoadingsPlaceLoading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsPlaceUnloading?: StringNullableFilter<"Cargo"> | string | null
    optionLoadingsBigBag?: StringNullableFilter<"Cargo"> | string | null
    optionTerms?: EnumTermsNullableListFilter<"Cargo">
    optionTermsTemperature?: StringNullableFilter<"Cargo"> | string | null
    optionTermsQtyPallets?: StringNullableFilter<"Cargo"> | string | null
    optionTermsCorners?: StringNullableFilter<"Cargo"> | string | null
    optionTermsBelts?: StringNullableFilter<"Cargo"> | string | null
    optionTermsPalletsType?: EnumTermsPalletsTypeNullableFilter<"Cargo"> | $Enums.TermsPalletsType | null
    optionAdditionally?: EnumAdditionallyNullableListFilter<"Cargo">
    userId?: StringNullableFilter<"Cargo"> | string | null
    userName?: StringNullableFilter<"Cargo"> | string | null
    userPhone?: StringNullableFilter<"Cargo"> | string | null
    viewsId?: StringNullableFilter<"Cargo"> | string | null
  }

  export type WishListUpsertWithWhereUniqueWithoutUserInput = {
    where: WishListWhereUniqueInput
    update: XOR<WishListUpdateWithoutUserInput, WishListUncheckedUpdateWithoutUserInput>
    create: XOR<WishListCreateWithoutUserInput, WishListUncheckedCreateWithoutUserInput>
  }

  export type WishListUpdateWithWhereUniqueWithoutUserInput = {
    where: WishListWhereUniqueInput
    data: XOR<WishListUpdateWithoutUserInput, WishListUncheckedUpdateWithoutUserInput>
  }

  export type WishListUpdateManyWithWhereWithoutUserInput = {
    where: WishListScalarWhereInput
    data: XOR<WishListUpdateManyMutationInput, WishListUncheckedUpdateManyWithoutUserInput>
  }

  export type WishListScalarWhereInput = {
    AND?: WishListScalarWhereInput | WishListScalarWhereInput[]
    OR?: WishListScalarWhereInput[]
    NOT?: WishListScalarWhereInput | WishListScalarWhereInput[]
    id?: StringFilter<"WishList"> | string
    createdAt?: DateTimeFilter<"WishList"> | Date | string
    updatedAt?: DateTimeFilter<"WishList"> | Date | string
    userId?: StringNullableFilter<"WishList"> | string | null
    cargoId?: StringNullableFilter<"WishList"> | string | null
  }

  export type UserCreateWithoutCargosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    wishList?: WishListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCargosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    wishList?: WishListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCargosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCargosInput, UserUncheckedCreateWithoutCargosInput>
  }

  export type ViewsCreateWithoutCargoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    count?: number
  }

  export type ViewsUncheckedCreateWithoutCargoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    count?: number
  }

  export type ViewsCreateOrConnectWithoutCargoInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutCargoInput, ViewsUncheckedCreateWithoutCargoInput>
  }

  export type WishListCreateWithoutCargoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutWishListInput
  }

  export type WishListUncheckedCreateWithoutCargoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WishListCreateOrConnectWithoutCargoInput = {
    where: WishListWhereUniqueInput
    create: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput>
  }

  export type WishListCreateManyCargoInputEnvelope = {
    data: WishListCreateManyCargoInput | WishListCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCargosInput = {
    update: XOR<UserUpdateWithoutCargosInput, UserUncheckedUpdateWithoutCargosInput>
    create: XOR<UserCreateWithoutCargosInput, UserUncheckedCreateWithoutCargosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCargosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCargosInput, UserUncheckedUpdateWithoutCargosInput>
  }

  export type UserUpdateWithoutCargosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    wishList?: WishListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCargosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    wishList?: WishListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewsUpsertWithoutCargoInput = {
    update: XOR<ViewsUpdateWithoutCargoInput, ViewsUncheckedUpdateWithoutCargoInput>
    create: XOR<ViewsCreateWithoutCargoInput, ViewsUncheckedCreateWithoutCargoInput>
    where?: ViewsWhereInput
  }

  export type ViewsUpdateToOneWithWhereWithoutCargoInput = {
    where?: ViewsWhereInput
    data: XOR<ViewsUpdateWithoutCargoInput, ViewsUncheckedUpdateWithoutCargoInput>
  }

  export type ViewsUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ViewsUncheckedUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type WishListUpsertWithWhereUniqueWithoutCargoInput = {
    where: WishListWhereUniqueInput
    update: XOR<WishListUpdateWithoutCargoInput, WishListUncheckedUpdateWithoutCargoInput>
    create: XOR<WishListCreateWithoutCargoInput, WishListUncheckedCreateWithoutCargoInput>
  }

  export type WishListUpdateWithWhereUniqueWithoutCargoInput = {
    where: WishListWhereUniqueInput
    data: XOR<WishListUpdateWithoutCargoInput, WishListUncheckedUpdateWithoutCargoInput>
  }

  export type WishListUpdateManyWithWhereWithoutCargoInput = {
    where: WishListScalarWhereInput
    data: XOR<WishListUpdateManyMutationInput, WishListUncheckedUpdateManyWithoutCargoInput>
  }

  export type CargoCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    user?: UserCreateNestedOneWithoutCargosInput
    wishList?: WishListCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: string | null
    userName?: string | null
    userPhone?: string | null
    wishList?: WishListUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoCreateOrConnectWithoutViewsInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput>
  }

  export type CargoCreateManyViewsInputEnvelope = {
    data: CargoCreateManyViewsInput | CargoCreateManyViewsInput[]
    skipDuplicates?: boolean
  }

  export type CargoUpsertWithWhereUniqueWithoutViewsInput = {
    where: CargoWhereUniqueInput
    update: XOR<CargoUpdateWithoutViewsInput, CargoUncheckedUpdateWithoutViewsInput>
    create: XOR<CargoCreateWithoutViewsInput, CargoUncheckedCreateWithoutViewsInput>
  }

  export type CargoUpdateWithWhereUniqueWithoutViewsInput = {
    where: CargoWhereUniqueInput
    data: XOR<CargoUpdateWithoutViewsInput, CargoUncheckedUpdateWithoutViewsInput>
  }

  export type CargoUpdateManyWithWhereWithoutViewsInput = {
    where: CargoScalarWhereInput
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyWithoutViewsInput>
  }

  export type UserCreateWithoutWishListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    cargos?: CargoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    phone?: string | null
    hash: string
    name?: string | null
    surname?: string | null
    city?: string | null
    avatar?: string | null
    role?: $Enums.Role
    whatsappNumbers?: UserCreatewhatsappNumbersInput | string[]
    telegramNumbers?: UserCreatetelegramNumbersInput | string[]
    viberNumbers?: UserCreateviberNumbersInput | string[]
    skypeNumbers?: UserCreateskypeNumbersInput | string[]
    otherNumbers?: UserCreateotherNumbersInput | string[]
    subscriptionStartDate?: Date | string | null
    subscriptionEndDate?: Date | string | null
    subscriptionStatus?: boolean | null
    isVerified?: boolean | null
    isBlocked?: boolean | null
    documents?: UserCreatedocumentsInput | string[]
    cargos?: CargoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishListInput, UserUncheckedCreateWithoutWishListInput>
  }

  export type CargoCreateWithoutWishListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    user?: UserCreateNestedOneWithoutCargosInput
    views?: ViewsCreateNestedOneWithoutCargoInput
  }

  export type CargoUncheckedCreateWithoutWishListInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: string | null
    userName?: string | null
    userPhone?: string | null
    viewsId?: string | null
  }

  export type CargoCreateOrConnectWithoutWishListInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutWishListInput, CargoUncheckedCreateWithoutWishListInput>
  }

  export type UserUpsertWithoutWishListInput = {
    update: XOR<UserUpdateWithoutWishListInput, UserUncheckedUpdateWithoutWishListInput>
    create: XOR<UserCreateWithoutWishListInput, UserUncheckedCreateWithoutWishListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishListInput, UserUncheckedUpdateWithoutWishListInput>
  }

  export type UserUpdateWithoutWishListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    cargos?: CargoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsappNumbers?: UserUpdatewhatsappNumbersInput | string[]
    telegramNumbers?: UserUpdatetelegramNumbersInput | string[]
    viberNumbers?: UserUpdateviberNumbersInput | string[]
    skypeNumbers?: UserUpdateskypeNumbersInput | string[]
    otherNumbers?: UserUpdateotherNumbersInput | string[]
    subscriptionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documents?: UserUpdatedocumentsInput | string[]
    cargos?: CargoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CargoUpsertWithoutWishListInput = {
    update: XOR<CargoUpdateWithoutWishListInput, CargoUncheckedUpdateWithoutWishListInput>
    create: XOR<CargoCreateWithoutWishListInput, CargoUncheckedCreateWithoutWishListInput>
    where?: CargoWhereInput
  }

  export type CargoUpdateToOneWithWhereWithoutWishListInput = {
    where?: CargoWhereInput
    data: XOR<CargoUpdateWithoutWishListInput, CargoUncheckedUpdateWithoutWishListInput>
  }

  export type CargoUpdateWithoutWishListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCargosNestedInput
    views?: ViewsUpdateOneWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateWithoutWishListInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    viewsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: string | null
    userPhone?: string | null
    viewsId?: string | null
  }

  export type WishListCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cargoId?: string | null
  }

  export type CargoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    views?: ViewsUpdateOneWithoutCargoNestedInput
    wishList?: WishListUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    viewsId?: NullableStringFieldUpdateOperationsInput | string | null
    wishList?: WishListUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    viewsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: CargoUpdateOneWithoutWishListNestedInput
  }

  export type WishListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishListCreateManyCargoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WishListUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutWishListNestedInput
  }

  export type WishListUncheckedUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishListUncheckedUpdateManyWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargoCreateManyViewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    price: number
    currency: $Enums.Currency
    note?: string | null
    placesLoading?: CargoCreateplacesLoadingInput | string[]
    placesUnloading?: CargoCreateplacesUnloadingInput | string[]
    distance?: number | null
    tariff?: number | null
    routeLink?: string | null
    weight: number
    volume: number
    periodDays?: number
    startDate: Date | string
    endDate?: Date | string | null
    isArchived?: boolean | null
    archivedDate?: Date | string | null
    truckType?: CargoCreatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoCreateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoCreatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoCreatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoCreatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: string | null
    paymentDeferredDays?: string | null
    optionDocuments?: CargoCreateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: $Enums.DocumentsAdr | null
    optionLoadings?: CargoCreateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: string | null
    optionLoadingsTimeUnloading?: string | null
    optionLoadingsDateUnloading?: Date | string | null
    optionLoadingsPlaceLoading?: string | null
    optionLoadingsPlaceUnloading?: string | null
    optionLoadingsBigBag?: string | null
    optionTerms?: CargoCreateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: string | null
    optionTermsQtyPallets?: string | null
    optionTermsCorners?: string | null
    optionTermsBelts?: string | null
    optionTermsPalletsType?: $Enums.TermsPalletsType | null
    optionAdditionally?: CargoCreateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: string | null
    userName?: string | null
    userPhone?: string | null
  }

  export type CargoUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCargosNestedInput
    wishList?: WishListUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    wishList?: WishListUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateManyWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    note?: NullableStringFieldUpdateOperationsInput | string | null
    placesLoading?: CargoUpdateplacesLoadingInput | string[]
    placesUnloading?: CargoUpdateplacesUnloadingInput | string[]
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    tariff?: NullableIntFieldUpdateOperationsInput | number | null
    routeLink?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    periodDays?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    archivedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truckType?: CargoUpdatetruckTypeInput | $Enums.TruckType[]
    loadingType?: CargoUpdateloadingTypeInput | $Enums.LoadingType[]
    paymentMethod?: CargoUpdatepaymentMethodInput | $Enums.PaymentMethod[]
    paymentPeriod?: CargoUpdatepaymentPeriodInput | $Enums.PaymentPeriod[]
    paymentOther?: CargoUpdatepaymentOtherInput | $Enums.PaymentOther[]
    paymentPrepaymentPercent?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDeferredDays?: NullableStringFieldUpdateOperationsInput | string | null
    optionDocuments?: CargoUpdateoptionDocumentsInput | $Enums.Documents[]
    optionDocumentsAdr?: NullableEnumDocumentsAdrFieldUpdateOperationsInput | $Enums.DocumentsAdr | null
    optionLoadings?: CargoUpdateoptionLoadingsInput | $Enums.Loadings[]
    optionLoadingsTimeLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsTimeUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsDateUnloading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionLoadingsPlaceLoading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsPlaceUnloading?: NullableStringFieldUpdateOperationsInput | string | null
    optionLoadingsBigBag?: NullableStringFieldUpdateOperationsInput | string | null
    optionTerms?: CargoUpdateoptionTermsInput | $Enums.Terms[]
    optionTermsTemperature?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsQtyPallets?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsCorners?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsBelts?: NullableStringFieldUpdateOperationsInput | string | null
    optionTermsPalletsType?: NullableEnumTermsPalletsTypeFieldUpdateOperationsInput | $Enums.TermsPalletsType | null
    optionAdditionally?: CargoUpdateoptionAdditionallyInput | $Enums.Additionally[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
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