
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>
/**
 * Model EventOrganizer
 * 
 */
export type EventOrganizer = $Result.DefaultSelection<Prisma.$EventOrganizerPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model TrackingDetail
 * 
 */
export type TrackingDetail = $Result.DefaultSelection<Prisma.$TrackingDetailPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserTypeChoice: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type UserTypeChoice = (typeof UserTypeChoice)[keyof typeof UserTypeChoice]


export const NotificationTypeChoice: {
  USER_CREATED: 'USER_CREATED'
};

export type NotificationTypeChoice = (typeof NotificationTypeChoice)[keyof typeof NotificationTypeChoice]


export const Category: {
  MUSIC: 'MUSIC',
  HACKATHON: 'HACKATHON',
  COMMUNITY: 'COMMUNITY',
  SPORTS: 'SPORTS',
  EDUCATION: 'EDUCATION'
};

export type Category = (typeof Category)[keyof typeof Category]


export const EventOrganizerRole: {
  LOGISTICS: 'LOGISTICS',
  MARKETING: 'MARKETING',
  SPONSORSHIP: 'SPONSORSHIP',
  TECHNICAL: 'TECHNICAL',
  LEAD: 'LEAD'
};

export type EventOrganizerRole = (typeof EventOrganizerRole)[keyof typeof EventOrganizerRole]


export const NotificationDataTypeChoice: {
  USER: 'USER'
};

export type NotificationDataTypeChoice = (typeof NotificationDataTypeChoice)[keyof typeof NotificationDataTypeChoice]

}

export type UserTypeChoice = $Enums.UserTypeChoice

export const UserTypeChoice: typeof $Enums.UserTypeChoice

export type NotificationTypeChoice = $Enums.NotificationTypeChoice

export const NotificationTypeChoice: typeof $Enums.NotificationTypeChoice

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type EventOrganizerRole = $Enums.EventOrganizerRole

export const EventOrganizerRole: typeof $Enums.EventOrganizerRole

export type NotificationDataTypeChoice = $Enums.NotificationDataTypeChoice

export const NotificationDataTypeChoice: typeof $Enums.NotificationDataTypeChoice

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs>;

  /**
   * `prisma.eventOrganizer`: Exposes CRUD operations for the **EventOrganizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizers
    * const eventOrganizers = await prisma.eventOrganizer.findMany()
    * ```
    */
  get eventOrganizer(): Prisma.EventOrganizerDelegate<ExtArgs>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;

  /**
   * `prisma.trackingDetail`: Exposes CRUD operations for the **TrackingDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingDetails
    * const trackingDetails = await prisma.trackingDetail.findMany()
    * ```
    */
  get trackingDetail(): Prisma.TrackingDetailDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Event: 'Event',
    Response: 'Response',
    EventOrganizer: 'EventOrganizer',
    Track: 'Track',
    TrackingDetail: 'TrackingDetail',
    Chat: 'Chat',
    Message: 'Message',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'event' | 'response' | 'eventOrganizer' | 'track' | 'trackingDetail' | 'chat' | 'message' | 'notification'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>,
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>,
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
          }
        }
      }
      EventOrganizer: {
        payload: Prisma.$EventOrganizerPayload<ExtArgs>
        fields: Prisma.EventOrganizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          findMany: {
            args: Prisma.EventOrganizerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>[]
          }
          create: {
            args: Prisma.EventOrganizerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          createMany: {
            args: Prisma.EventOrganizerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventOrganizerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          update: {
            args: Prisma.EventOrganizerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventOrganizerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerPayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEventOrganizer>
          }
          groupBy: {
            args: Prisma.EventOrganizerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventOrganizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerCountArgs<ExtArgs>,
            result: $Utils.Optional<EventOrganizerCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      TrackingDetail: {
        payload: Prisma.$TrackingDetailPayload<ExtArgs>
        fields: Prisma.TrackingDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          findFirst: {
            args: Prisma.TrackingDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          findMany: {
            args: Prisma.TrackingDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>[]
          }
          create: {
            args: Prisma.TrackingDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          createMany: {
            args: Prisma.TrackingDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackingDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          update: {
            args: Prisma.TrackingDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          deleteMany: {
            args: Prisma.TrackingDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackingDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingDetailPayload>
          }
          aggregate: {
            args: Prisma.TrackingDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrackingDetail>
          }
          groupBy: {
            args: Prisma.TrackingDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackingDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackingDetailCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    messages: number
    chats: number
    notifications: number
    events: number
    volunteerEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    volunteerEvents?: boolean | UserCountOutputTypeCountVolunteerEventsArgs
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
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVolunteerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerWhereInput
  }



  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    formResponses: number
    tracks: number
    organizers: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | EventCountOutputTypeCountFormResponsesArgs
    tracks?: boolean | EventCountOutputTypeCountTracksArgs
    organizers?: boolean | EventCountOutputTypeCountOrganizersArgs
  }

  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFormResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountOrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerWhereInput
  }



  /**
   * Count Type ResponseCountOutputType
   */

  export type ResponseCountOutputType = {
    tracks: number
  }

  export type ResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | ResponseCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes

  /**
   * ResponseCountOutputType without action
   */
  export type ResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseCountOutputType
     */
    select?: ResponseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ResponseCountOutputType without action
   */
  export type ResponseCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingDetailWhereInput
  }



  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    trackingDetails: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackingDetails?: boolean | TrackCountOutputTypeCountTrackingDetailsArgs
  }

  // Custom InputTypes

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountTrackingDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingDetailWhereInput
  }



  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    participants: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    participants?: boolean | ChatCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    noOfPasswordsChanged: number | null
  }

  export type UserSumAggregateOutputType = {
    noOfPasswordsChanged: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    type: $Enums.UserTypeChoice | null
    about: string | null
    noOfPasswordsChanged: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    type: $Enums.UserTypeChoice | null
    about: string | null
    noOfPasswordsChanged: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    phone: number
    type: number
    about: number
    disabledNotifications: number
    noOfPasswordsChanged: number
    createdAt: number
    updatedAt: number
    notificationIds: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    noOfPasswordsChanged?: true
  }

  export type UserSumAggregateInputType = {
    noOfPasswordsChanged?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    type?: true
    about?: true
    noOfPasswordsChanged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    type?: true
    about?: true
    noOfPasswordsChanged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    type?: true
    about?: true
    disabledNotifications?: true
    noOfPasswordsChanged?: true
    createdAt?: true
    updatedAt?: true
    notificationIds?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    phone: string
    type: $Enums.UserTypeChoice
    about: string | null
    disabledNotifications: $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged: number
    createdAt: Date
    updatedAt: Date
    notificationIds: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    type?: boolean
    about?: boolean
    disabledNotifications?: boolean
    noOfPasswordsChanged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationIds?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    volunteerEvents?: boolean | User$volunteerEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    type?: boolean
    about?: boolean
    disabledNotifications?: boolean
    noOfPasswordsChanged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationIds?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    volunteerEvents?: boolean | User$volunteerEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      volunteerEvents: Prisma.$EventOrganizerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      phone: string
      type: $Enums.UserTypeChoice
      about: string | null
      disabledNotifications: $Enums.NotificationTypeChoice[]
      noOfPasswordsChanged: number
      createdAt: Date
      updatedAt: Date
      notificationIds: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'> | Null>;

    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'> | Null>;

    volunteerEvents<T extends User$volunteerEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserTypeChoice'>
    readonly about: FieldRef<"User", 'String'>
    readonly disabledNotifications: FieldRef<"User", 'NotificationTypeChoice[]'>
    readonly noOfPasswordsChanged: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly notificationIds: FieldRef<"User", 'String[]'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * User.volunteerEvents
   */
  export type User$volunteerEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    where?: EventOrganizerWhereInput
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    cursor?: EventOrganizerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerScalarFieldEnum | EventOrganizerScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    registrationPrice: number | null
  }

  export type EventSumAggregateOutputType = {
    registrationPrice: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    image: string | null
    date: Date | null
    time: string | null
    venue: string | null
    paymentScreenshotNeeded: boolean | null
    registrationPrice: number | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    image: string | null
    date: Date | null
    time: string | null
    venue: string | null
    paymentScreenshotNeeded: boolean | null
    registrationPrice: number | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    image: number
    date: number
    time: number
    venue: number
    paymentScreenshotNeeded: number
    registrationRequirements: number
    registrationPrice: number
    leadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    registrationPrice?: true
  }

  export type EventSumAggregateInputType = {
    registrationPrice?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    date?: true
    time?: true
    venue?: true
    paymentScreenshotNeeded?: true
    registrationPrice?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    date?: true
    time?: true
    venue?: true
    paymentScreenshotNeeded?: true
    registrationPrice?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    date?: true
    time?: true
    venue?: true
    paymentScreenshotNeeded?: true
    registrationRequirements?: true
    registrationPrice?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements: string[]
    registrationPrice: number
    leadId: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    paymentScreenshotNeeded?: boolean
    registrationRequirements?: boolean
    registrationPrice?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formResponses?: boolean | Event$formResponsesArgs<ExtArgs>
    tracks?: boolean | Event$tracksArgs<ExtArgs>
    lead?: boolean | UserDefaultArgs<ExtArgs>
    organizers?: boolean | Event$organizersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    paymentScreenshotNeeded?: boolean
    registrationRequirements?: boolean
    registrationPrice?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | Event$formResponsesArgs<ExtArgs>
    tracks?: boolean | Event$tracksArgs<ExtArgs>
    lead?: boolean | UserDefaultArgs<ExtArgs>
    organizers?: boolean | Event$organizersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      formResponses: Prisma.$ResponsePayload<ExtArgs>[]
      tracks: Prisma.$TrackPayload<ExtArgs>[]
      lead: Prisma.$UserPayload<ExtArgs>
      organizers: Prisma.$EventOrganizerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: $Enums.Category
      image: string
      date: Date
      time: string
      venue: string
      paymentScreenshotNeeded: boolean
      registrationRequirements: string[]
      registrationPrice: number
      leadId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }


  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    formResponses<T extends Event$formResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Event$formResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends Event$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Event$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'> | Null>;

    lead<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    organizers<T extends Event$organizersArgs<ExtArgs> = {}>(args?: Subset<T, Event$organizersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'Category'>
    readonly image: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'String'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly paymentScreenshotNeeded: FieldRef<"Event", 'Boolean'>
    readonly registrationRequirements: FieldRef<"Event", 'String[]'>
    readonly registrationPrice: FieldRef<"Event", 'Float'>
    readonly leadId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }


  /**
   * Event.formResponses
   */
  export type Event$formResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }


  /**
   * Event.tracks
   */
  export type Event$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Event.organizers
   */
  export type Event$organizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    where?: EventOrganizerWhereInput
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    cursor?: EventOrganizerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerScalarFieldEnum | EventOrganizerScalarFieldEnum[]
  }


  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
  }



  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    eventId: string | null
    linkedIn: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    eventId: string | null
    linkedIn: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    extraInfo: number
    eventId: number
    linkedIn: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResponseMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    eventId?: true
    linkedIn?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    eventId?: true
    linkedIn?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    extraInfo?: true
    eventId?: true
    linkedIn?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonValue
    eventId: string
    linkedIn: string | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResponseCountAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    extraInfo?: boolean
    eventId?: boolean
    linkedIn?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    tracks?: boolean | Response$tracksArgs<ExtArgs>
    _count?: boolean | ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    extraInfo?: boolean
    eventId?: boolean
    linkedIn?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    tracks?: boolean | Response$tracksArgs<ExtArgs>
    _count?: boolean | ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      tracks: Prisma.$TrackingDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string
      extraInfo: Prisma.JsonValue
      eventId: string
      linkedIn: string | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["response"]>
    composites: {}
  }


  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResponseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Response that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResponseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResponseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
    **/
    create<T extends ResponseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Responses.
     *     @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     *     @example
     *     // Create many Responses
     *     const response = await prisma.response.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResponseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
    **/
    delete<T extends ResponseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResponseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResponseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResponseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
    **/
    upsert<T extends ResponseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>
    ): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
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
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tracks<T extends Response$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Response$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Response model
   */ 
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'String'>
    readonly fullName: FieldRef<"Response", 'String'>
    readonly email: FieldRef<"Response", 'String'>
    readonly phone: FieldRef<"Response", 'String'>
    readonly extraInfo: FieldRef<"Response", 'Json'>
    readonly eventId: FieldRef<"Response", 'String'>
    readonly linkedIn: FieldRef<"Response", 'String'>
    readonly remarks: FieldRef<"Response", 'String'>
    readonly createdAt: FieldRef<"Response", 'DateTime'>
    readonly updatedAt: FieldRef<"Response", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }


  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }


  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }


  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }


  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }


  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }


  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }


  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
  }


  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }


  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }


  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
  }


  /**
   * Response.tracks
   */
  export type Response$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    where?: TrackingDetailWhereInput
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    cursor?: TrackingDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingDetailScalarFieldEnum | TrackingDetailScalarFieldEnum[]
  }


  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponseInclude<ExtArgs> | null
  }



  /**
   * Model EventOrganizer
   */

  export type AggregateEventOrganizer = {
    _count: EventOrganizerCountAggregateOutputType | null
    _min: EventOrganizerMinAggregateOutputType | null
    _max: EventOrganizerMaxAggregateOutputType | null
  }

  export type EventOrganizerMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    role: $Enums.EventOrganizerRole | null
    remarks: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventOrganizerMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    role: $Enums.EventOrganizerRole | null
    remarks: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventOrganizerCountAggregateOutputType = {
    id: number
    eventId: number
    role: number
    remarks: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventOrganizerMinAggregateInputType = {
    id?: true
    eventId?: true
    role?: true
    remarks?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventOrganizerMaxAggregateInputType = {
    id?: true
    eventId?: true
    role?: true
    remarks?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventOrganizerCountAggregateInputType = {
    id?: true
    eventId?: true
    role?: true
    remarks?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventOrganizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizer to aggregate.
     */
    where?: EventOrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizers to fetch.
     */
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizers
    **/
    _count?: true | EventOrganizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerMaxAggregateInputType
  }

  export type GetEventOrganizerAggregateType<T extends EventOrganizerAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizer[P]>
      : GetScalarType<T[P], AggregateEventOrganizer[P]>
  }




  export type EventOrganizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerWhereInput
    orderBy?: EventOrganizerOrderByWithAggregationInput | EventOrganizerOrderByWithAggregationInput[]
    by: EventOrganizerScalarFieldEnum[] | EventOrganizerScalarFieldEnum
    having?: EventOrganizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerCountAggregateInputType | true
    _min?: EventOrganizerMinAggregateInputType
    _max?: EventOrganizerMaxAggregateInputType
  }

  export type EventOrganizerGroupByOutputType = {
    id: string
    eventId: string
    role: $Enums.EventOrganizerRole
    remarks: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EventOrganizerCountAggregateOutputType | null
    _min: EventOrganizerMinAggregateOutputType | null
    _max: EventOrganizerMaxAggregateOutputType | null
  }

  type GetEventOrganizerGroupByPayload<T extends EventOrganizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    role?: boolean
    remarks?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizer"]>

  export type EventOrganizerSelectScalar = {
    id?: boolean
    eventId?: boolean
    role?: boolean
    remarks?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOrganizerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $EventOrganizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizer"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      role: $Enums.EventOrganizerRole
      remarks: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventOrganizer"]>
    composites: {}
  }


  type EventOrganizerGetPayload<S extends boolean | null | undefined | EventOrganizerDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerPayload, S>

  type EventOrganizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventOrganizerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EventOrganizerCountAggregateInputType | true
    }

  export interface EventOrganizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizer'], meta: { name: 'EventOrganizer' } }
    /**
     * Find zero or one EventOrganizer that matches the filter.
     * @param {EventOrganizerFindUniqueArgs} args - Arguments to find a EventOrganizer
     * @example
     * // Get one EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventOrganizerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerFindUniqueArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EventOrganizer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventOrganizerFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizer
     * @example
     * // Get one EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventOrganizerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EventOrganizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerFindFirstArgs} args - Arguments to find a EventOrganizer
     * @example
     * // Get one EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventOrganizerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerFindFirstArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EventOrganizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerFindFirstOrThrowArgs} args - Arguments to find a EventOrganizer
     * @example
     * // Get one EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventOrganizerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EventOrganizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizers
     * const eventOrganizers = await prisma.eventOrganizer.findMany()
     * 
     * // Get first 10 EventOrganizers
     * const eventOrganizers = await prisma.eventOrganizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerWithIdOnly = await prisma.eventOrganizer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventOrganizerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EventOrganizer.
     * @param {EventOrganizerCreateArgs} args - Arguments to create a EventOrganizer.
     * @example
     * // Create one EventOrganizer
     * const EventOrganizer = await prisma.eventOrganizer.create({
     *   data: {
     *     // ... data to create a EventOrganizer
     *   }
     * })
     * 
    **/
    create<T extends EventOrganizerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerCreateArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EventOrganizers.
     *     @param {EventOrganizerCreateManyArgs} args - Arguments to create many EventOrganizers.
     *     @example
     *     // Create many EventOrganizers
     *     const eventOrganizer = await prisma.eventOrganizer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventOrganizerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventOrganizer.
     * @param {EventOrganizerDeleteArgs} args - Arguments to delete one EventOrganizer.
     * @example
     * // Delete one EventOrganizer
     * const EventOrganizer = await prisma.eventOrganizer.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizer
     *   }
     * })
     * 
    **/
    delete<T extends EventOrganizerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerDeleteArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EventOrganizer.
     * @param {EventOrganizerUpdateArgs} args - Arguments to update one EventOrganizer.
     * @example
     * // Update one EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventOrganizerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerUpdateArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EventOrganizers.
     * @param {EventOrganizerDeleteManyArgs} args - Arguments to filter EventOrganizers to delete.
     * @example
     * // Delete a few EventOrganizers
     * const { count } = await prisma.eventOrganizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventOrganizerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventOrganizerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizers
     * const eventOrganizer = await prisma.eventOrganizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventOrganizerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventOrganizer.
     * @param {EventOrganizerUpsertArgs} args - Arguments to update or create a EventOrganizer.
     * @example
     * // Update or create a EventOrganizer
     * const eventOrganizer = await prisma.eventOrganizer.upsert({
     *   create: {
     *     // ... data to create a EventOrganizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizer we want to update
     *   }
     * })
    **/
    upsert<T extends EventOrganizerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventOrganizerUpsertArgs<ExtArgs>>
    ): Prisma__EventOrganizerClient<$Result.GetResult<Prisma.$EventOrganizerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EventOrganizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerCountArgs} args - Arguments to filter EventOrganizers to count.
     * @example
     * // Count the number of EventOrganizers
     * const count = await prisma.eventOrganizer.count({
     *   where: {
     *     // ... the filter for the EventOrganizers we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerCountArgs>(
      args?: Subset<T, EventOrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerAggregateArgs>(args: Subset<T, EventOrganizerAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerAggregateType<T>>

    /**
     * Group by EventOrganizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizer model
   */
  readonly fields: EventOrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EventOrganizer model
   */ 
  interface EventOrganizerFieldRefs {
    readonly id: FieldRef<"EventOrganizer", 'String'>
    readonly eventId: FieldRef<"EventOrganizer", 'String'>
    readonly role: FieldRef<"EventOrganizer", 'EventOrganizerRole'>
    readonly remarks: FieldRef<"EventOrganizer", 'String'>
    readonly userId: FieldRef<"EventOrganizer", 'String'>
    readonly createdAt: FieldRef<"EventOrganizer", 'DateTime'>
    readonly updatedAt: FieldRef<"EventOrganizer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * EventOrganizer findUnique
   */
  export type EventOrganizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizer to fetch.
     */
    where: EventOrganizerWhereUniqueInput
  }


  /**
   * EventOrganizer findUniqueOrThrow
   */
  export type EventOrganizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizer to fetch.
     */
    where: EventOrganizerWhereUniqueInput
  }


  /**
   * EventOrganizer findFirst
   */
  export type EventOrganizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizer to fetch.
     */
    where?: EventOrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizers to fetch.
     */
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizers.
     */
    cursor?: EventOrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizers.
     */
    distinct?: EventOrganizerScalarFieldEnum | EventOrganizerScalarFieldEnum[]
  }


  /**
   * EventOrganizer findFirstOrThrow
   */
  export type EventOrganizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizer to fetch.
     */
    where?: EventOrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizers to fetch.
     */
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizers.
     */
    cursor?: EventOrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizers.
     */
    distinct?: EventOrganizerScalarFieldEnum | EventOrganizerScalarFieldEnum[]
  }


  /**
   * EventOrganizer findMany
   */
  export type EventOrganizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizers to fetch.
     */
    where?: EventOrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizers to fetch.
     */
    orderBy?: EventOrganizerOrderByWithRelationInput | EventOrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizers.
     */
    cursor?: EventOrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizers.
     */
    skip?: number
    distinct?: EventOrganizerScalarFieldEnum | EventOrganizerScalarFieldEnum[]
  }


  /**
   * EventOrganizer create
   */
  export type EventOrganizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizer.
     */
    data: XOR<EventOrganizerCreateInput, EventOrganizerUncheckedCreateInput>
  }


  /**
   * EventOrganizer createMany
   */
  export type EventOrganizerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizers.
     */
    data: EventOrganizerCreateManyInput | EventOrganizerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EventOrganizer update
   */
  export type EventOrganizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizer.
     */
    data: XOR<EventOrganizerUpdateInput, EventOrganizerUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizer to update.
     */
    where: EventOrganizerWhereUniqueInput
  }


  /**
   * EventOrganizer updateMany
   */
  export type EventOrganizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizers.
     */
    data: XOR<EventOrganizerUpdateManyMutationInput, EventOrganizerUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizers to update
     */
    where?: EventOrganizerWhereInput
  }


  /**
   * EventOrganizer upsert
   */
  export type EventOrganizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizer to update in case it exists.
     */
    where: EventOrganizerWhereUniqueInput
    /**
     * In case the EventOrganizer found by the `where` argument doesn't exist, create a new EventOrganizer with this data.
     */
    create: XOR<EventOrganizerCreateInput, EventOrganizerUncheckedCreateInput>
    /**
     * In case the EventOrganizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerUpdateInput, EventOrganizerUncheckedUpdateInput>
  }


  /**
   * EventOrganizer delete
   */
  export type EventOrganizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizer to delete.
     */
    where: EventOrganizerWhereUniqueInput
  }


  /**
   * EventOrganizer deleteMany
   */
  export type EventOrganizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizers to delete
     */
    where?: EventOrganizerWhereInput
  }


  /**
   * EventOrganizer without action
   */
  export type EventOrganizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizer
     */
    select?: EventOrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventOrganizerInclude<ExtArgs> | null
  }



  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    title: number
    description: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrackMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: string
    title: string
    description: string
    eventId: string
    createdAt: Date
    updatedAt: Date
    _count: TrackCountAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    trackingDetails?: boolean | Track$trackingDetailsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    trackingDetails?: boolean | Track$trackingDetailsArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      trackingDetails: Prisma.$TrackingDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      eventId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["track"]>
    composites: {}
  }


  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
    **/
    create<T extends TrackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackCreateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const track = await prisma.track.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
    **/
    delete<T extends TrackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
    **/
    upsert<T extends TrackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trackingDetails<T extends Track$trackingDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Track$trackingDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'String'>
    readonly title: FieldRef<"Track", 'String'>
    readonly description: FieldRef<"Track", 'String'>
    readonly eventId: FieldRef<"Track", 'String'>
    readonly createdAt: FieldRef<"Track", 'DateTime'>
    readonly updatedAt: FieldRef<"Track", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }


  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }


  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }


  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }


  /**
   * Track.trackingDetails
   */
  export type Track$trackingDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    where?: TrackingDetailWhereInput
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    cursor?: TrackingDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingDetailScalarFieldEnum | TrackingDetailScalarFieldEnum[]
  }


  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude<ExtArgs> | null
  }



  /**
   * Model TrackingDetail
   */

  export type AggregateTrackingDetail = {
    _count: TrackingDetailCountAggregateOutputType | null
    _min: TrackingDetailMinAggregateOutputType | null
    _max: TrackingDetailMaxAggregateOutputType | null
  }

  export type TrackingDetailMinAggregateOutputType = {
    id: string | null
    trackId: string | null
    responseId: string | null
    scannedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackingDetailMaxAggregateOutputType = {
    id: string | null
    trackId: string | null
    responseId: string | null
    scannedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackingDetailCountAggregateOutputType = {
    id: number
    trackId: number
    responseId: number
    scannedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrackingDetailMinAggregateInputType = {
    id?: true
    trackId?: true
    responseId?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackingDetailMaxAggregateInputType = {
    id?: true
    trackId?: true
    responseId?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackingDetailCountAggregateInputType = {
    id?: true
    trackId?: true
    responseId?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrackingDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingDetail to aggregate.
     */
    where?: TrackingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingDetails to fetch.
     */
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingDetails
    **/
    _count?: true | TrackingDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingDetailMaxAggregateInputType
  }

  export type GetTrackingDetailAggregateType<T extends TrackingDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingDetail[P]>
      : GetScalarType<T[P], AggregateTrackingDetail[P]>
  }




  export type TrackingDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingDetailWhereInput
    orderBy?: TrackingDetailOrderByWithAggregationInput | TrackingDetailOrderByWithAggregationInput[]
    by: TrackingDetailScalarFieldEnum[] | TrackingDetailScalarFieldEnum
    having?: TrackingDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingDetailCountAggregateInputType | true
    _min?: TrackingDetailMinAggregateInputType
    _max?: TrackingDetailMaxAggregateInputType
  }

  export type TrackingDetailGroupByOutputType = {
    id: string
    trackId: string
    responseId: string
    scannedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TrackingDetailCountAggregateOutputType | null
    _min: TrackingDetailMinAggregateOutputType | null
    _max: TrackingDetailMaxAggregateOutputType | null
  }

  type GetTrackingDetailGroupByPayload<T extends TrackingDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingDetailGroupByOutputType[P]>
        }
      >
    >


  export type TrackingDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    responseId?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingDetail"]>

  export type TrackingDetailSelectScalar = {
    id?: boolean
    trackId?: boolean
    responseId?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrackingDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }


  export type $TrackingDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingDetail"
    objects: {
      track: Prisma.$TrackPayload<ExtArgs>
      response: Prisma.$ResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackId: string
      responseId: string
      scannedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trackingDetail"]>
    composites: {}
  }


  type TrackingDetailGetPayload<S extends boolean | null | undefined | TrackingDetailDefaultArgs> = $Result.GetResult<Prisma.$TrackingDetailPayload, S>

  type TrackingDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackingDetailFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrackingDetailCountAggregateInputType | true
    }

  export interface TrackingDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingDetail'], meta: { name: 'TrackingDetail' } }
    /**
     * Find zero or one TrackingDetail that matches the filter.
     * @param {TrackingDetailFindUniqueArgs} args - Arguments to find a TrackingDetail
     * @example
     * // Get one TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackingDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrackingDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackingDetailFindUniqueOrThrowArgs} args - Arguments to find a TrackingDetail
     * @example
     * // Get one TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackingDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrackingDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailFindFirstArgs} args - Arguments to find a TrackingDetail
     * @example
     * // Get one TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackingDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailFindFirstArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrackingDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailFindFirstOrThrowArgs} args - Arguments to find a TrackingDetail
     * @example
     * // Get one TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackingDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrackingDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingDetails
     * const trackingDetails = await prisma.trackingDetail.findMany()
     * 
     * // Get first 10 TrackingDetails
     * const trackingDetails = await prisma.trackingDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingDetailWithIdOnly = await prisma.trackingDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackingDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrackingDetail.
     * @param {TrackingDetailCreateArgs} args - Arguments to create a TrackingDetail.
     * @example
     * // Create one TrackingDetail
     * const TrackingDetail = await prisma.trackingDetail.create({
     *   data: {
     *     // ... data to create a TrackingDetail
     *   }
     * })
     * 
    **/
    create<T extends TrackingDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailCreateArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrackingDetails.
     *     @param {TrackingDetailCreateManyArgs} args - Arguments to create many TrackingDetails.
     *     @example
     *     // Create many TrackingDetails
     *     const trackingDetail = await prisma.trackingDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackingDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackingDetail.
     * @param {TrackingDetailDeleteArgs} args - Arguments to delete one TrackingDetail.
     * @example
     * // Delete one TrackingDetail
     * const TrackingDetail = await prisma.trackingDetail.delete({
     *   where: {
     *     // ... filter to delete one TrackingDetail
     *   }
     * })
     * 
    **/
    delete<T extends TrackingDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailDeleteArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrackingDetail.
     * @param {TrackingDetailUpdateArgs} args - Arguments to update one TrackingDetail.
     * @example
     * // Update one TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackingDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailUpdateArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrackingDetails.
     * @param {TrackingDetailDeleteManyArgs} args - Arguments to filter TrackingDetails to delete.
     * @example
     * // Delete a few TrackingDetails
     * const { count } = await prisma.trackingDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackingDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingDetails
     * const trackingDetail = await prisma.trackingDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackingDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackingDetail.
     * @param {TrackingDetailUpsertArgs} args - Arguments to update or create a TrackingDetail.
     * @example
     * // Update or create a TrackingDetail
     * const trackingDetail = await prisma.trackingDetail.upsert({
     *   create: {
     *     // ... data to create a TrackingDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingDetail we want to update
     *   }
     * })
    **/
    upsert<T extends TrackingDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingDetailUpsertArgs<ExtArgs>>
    ): Prisma__TrackingDetailClient<$Result.GetResult<Prisma.$TrackingDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrackingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailCountArgs} args - Arguments to filter TrackingDetails to count.
     * @example
     * // Count the number of TrackingDetails
     * const count = await prisma.trackingDetail.count({
     *   where: {
     *     // ... the filter for the TrackingDetails we want to count
     *   }
     * })
    **/
    count<T extends TrackingDetailCountArgs>(
      args?: Subset<T, TrackingDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingDetailAggregateArgs>(args: Subset<T, TrackingDetailAggregateArgs>): Prisma.PrismaPromise<GetTrackingDetailAggregateType<T>>

    /**
     * Group by TrackingDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingDetailGroupByArgs} args - Group by arguments.
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
      T extends TrackingDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingDetailGroupByArgs['orderBy'] }
        : { orderBy?: TrackingDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackingDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingDetail model
   */
  readonly fields: TrackingDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    response<T extends ResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponseDefaultArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrackingDetail model
   */ 
  interface TrackingDetailFieldRefs {
    readonly id: FieldRef<"TrackingDetail", 'String'>
    readonly trackId: FieldRef<"TrackingDetail", 'String'>
    readonly responseId: FieldRef<"TrackingDetail", 'String'>
    readonly scannedAt: FieldRef<"TrackingDetail", 'DateTime'>
    readonly createdAt: FieldRef<"TrackingDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"TrackingDetail", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TrackingDetail findUnique
   */
  export type TrackingDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter, which TrackingDetail to fetch.
     */
    where: TrackingDetailWhereUniqueInput
  }


  /**
   * TrackingDetail findUniqueOrThrow
   */
  export type TrackingDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter, which TrackingDetail to fetch.
     */
    where: TrackingDetailWhereUniqueInput
  }


  /**
   * TrackingDetail findFirst
   */
  export type TrackingDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter, which TrackingDetail to fetch.
     */
    where?: TrackingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingDetails to fetch.
     */
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingDetails.
     */
    cursor?: TrackingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingDetails.
     */
    distinct?: TrackingDetailScalarFieldEnum | TrackingDetailScalarFieldEnum[]
  }


  /**
   * TrackingDetail findFirstOrThrow
   */
  export type TrackingDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter, which TrackingDetail to fetch.
     */
    where?: TrackingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingDetails to fetch.
     */
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingDetails.
     */
    cursor?: TrackingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingDetails.
     */
    distinct?: TrackingDetailScalarFieldEnum | TrackingDetailScalarFieldEnum[]
  }


  /**
   * TrackingDetail findMany
   */
  export type TrackingDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter, which TrackingDetails to fetch.
     */
    where?: TrackingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingDetails to fetch.
     */
    orderBy?: TrackingDetailOrderByWithRelationInput | TrackingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingDetails.
     */
    cursor?: TrackingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingDetails.
     */
    skip?: number
    distinct?: TrackingDetailScalarFieldEnum | TrackingDetailScalarFieldEnum[]
  }


  /**
   * TrackingDetail create
   */
  export type TrackingDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingDetail.
     */
    data: XOR<TrackingDetailCreateInput, TrackingDetailUncheckedCreateInput>
  }


  /**
   * TrackingDetail createMany
   */
  export type TrackingDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingDetails.
     */
    data: TrackingDetailCreateManyInput | TrackingDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrackingDetail update
   */
  export type TrackingDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingDetail.
     */
    data: XOR<TrackingDetailUpdateInput, TrackingDetailUncheckedUpdateInput>
    /**
     * Choose, which TrackingDetail to update.
     */
    where: TrackingDetailWhereUniqueInput
  }


  /**
   * TrackingDetail updateMany
   */
  export type TrackingDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingDetails.
     */
    data: XOR<TrackingDetailUpdateManyMutationInput, TrackingDetailUncheckedUpdateManyInput>
    /**
     * Filter which TrackingDetails to update
     */
    where?: TrackingDetailWhereInput
  }


  /**
   * TrackingDetail upsert
   */
  export type TrackingDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingDetail to update in case it exists.
     */
    where: TrackingDetailWhereUniqueInput
    /**
     * In case the TrackingDetail found by the `where` argument doesn't exist, create a new TrackingDetail with this data.
     */
    create: XOR<TrackingDetailCreateInput, TrackingDetailUncheckedCreateInput>
    /**
     * In case the TrackingDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingDetailUpdateInput, TrackingDetailUncheckedUpdateInput>
  }


  /**
   * TrackingDetail delete
   */
  export type TrackingDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
    /**
     * Filter which TrackingDetail to delete.
     */
    where: TrackingDetailWhereUniqueInput
  }


  /**
   * TrackingDetail deleteMany
   */
  export type TrackingDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingDetails to delete
     */
    where?: TrackingDetailWhereInput
  }


  /**
   * TrackingDetail without action
   */
  export type TrackingDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingDetail
     */
    select?: TrackingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingDetailInclude<ExtArgs> | null
  }



  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    read: boolean | null
    closed: boolean | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    read: boolean | null
    closed: boolean | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    read: number
    closed: number
    createdAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    read?: true
    closed?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    read?: true
    closed?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    read?: true
    closed?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    read: boolean
    closed: boolean
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    read?: boolean
    closed?: boolean
    createdAt?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    participants?: boolean | Chat$participantsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    read?: boolean
    closed?: boolean
    createdAt?: boolean
  }

  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    participants?: boolean | Chat$participantsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      participants: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      read: boolean
      closed: boolean
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }


  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCreateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chats.
     *     @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    participants<T extends Chat$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Chat$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly read: FieldRef<"Chat", 'Boolean'>
    readonly closed: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }


  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Chat.participants
   */
  export type Chat$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    senderId: string | null
    chatId: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    senderId: string | null
    chatId: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    senderId: number
    chatId: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    chatId?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    chatId?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    chatId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    text: string
    senderId: string
    chatId: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    senderId?: boolean
    chatId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    senderId?: boolean
    chatId?: boolean
    createdAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      senderId: string
      chatId: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    dataId: string | null
    dataType: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice | null
    read: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    dataId: string | null
    dataType: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice | null
    read: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    body: number
    dataId: number
    dataType: number
    type: number
    read: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    dataId?: true
    dataType?: true
    type?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    dataId?: true
    dataType?: true
    type?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    dataId?: true
    dataType?: true
    type?: true
    read?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    body: string
    dataId: string | null
    dataType: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    dataId?: boolean
    dataType?: boolean
    type?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    dataId?: boolean
    dataType?: boolean
    type?: boolean
    read?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      dataId: string | null
      dataType: $Enums.NotificationDataTypeChoice | null
      type: $Enums.NotificationTypeChoice
      read: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly dataId: FieldRef<"Notification", 'String'>
    readonly dataType: FieldRef<"Notification", 'NotificationDataTypeChoice'>
    readonly type: FieldRef<"Notification", 'NotificationTypeChoice'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    type: 'type',
    about: 'about',
    disabledNotifications: 'disabledNotifications',
    noOfPasswordsChanged: 'noOfPasswordsChanged',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notificationIds: 'notificationIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    image: 'image',
    date: 'date',
    time: 'time',
    venue: 'venue',
    paymentScreenshotNeeded: 'paymentScreenshotNeeded',
    registrationRequirements: 'registrationRequirements',
    registrationPrice: 'registrationPrice',
    leadId: 'leadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    extraInfo: 'extraInfo',
    eventId: 'eventId',
    linkedIn: 'linkedIn',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


  export const EventOrganizerScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    role: 'role',
    remarks: 'remarks',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventOrganizerScalarFieldEnum = (typeof EventOrganizerScalarFieldEnum)[keyof typeof EventOrganizerScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const TrackingDetailScalarFieldEnum: {
    id: 'id',
    trackId: 'trackId',
    responseId: 'responseId',
    scannedAt: 'scannedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrackingDetailScalarFieldEnum = (typeof TrackingDetailScalarFieldEnum)[keyof typeof TrackingDetailScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    read: 'read',
    closed: 'closed',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    senderId: 'senderId',
    chatId: 'chatId',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    dataId: 'dataId',
    dataType: 'dataType',
    type: 'type',
    read: 'read',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserTypeChoice'
   */
  export type EnumUserTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypeChoice'>
    


  /**
   * Reference to a field of type 'UserTypeChoice[]'
   */
  export type ListEnumUserTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypeChoice[]'>
    


  /**
   * Reference to a field of type 'NotificationTypeChoice[]'
   */
  export type ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationTypeChoice[]'>
    


  /**
   * Reference to a field of type 'NotificationTypeChoice'
   */
  export type EnumNotificationTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationTypeChoice'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'EventOrganizerRole'
   */
  export type EnumEventOrganizerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventOrganizerRole'>
    


  /**
   * Reference to a field of type 'EventOrganizerRole[]'
   */
  export type ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventOrganizerRole[]'>
    


  /**
   * Reference to a field of type 'NotificationDataTypeChoice'
   */
  export type EnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationDataTypeChoice'>
    


  /**
   * Reference to a field of type 'NotificationDataTypeChoice[]'
   */
  export type ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationDataTypeChoice[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    type?: EnumUserTypeChoiceFilter<"User"> | $Enums.UserTypeChoice
    about?: StringNullableFilter<"User"> | string | null
    disabledNotifications?: EnumNotificationTypeChoiceNullableListFilter<"User">
    noOfPasswordsChanged?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notificationIds?: StringNullableListFilter<"User">
    messages?: MessageListRelationFilter
    chats?: ChatListRelationFilter
    notifications?: NotificationListRelationFilter
    events?: EventListRelationFilter
    volunteerEvents?: EventOrganizerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    about?: SortOrderInput | SortOrder
    disabledNotifications?: SortOrder
    noOfPasswordsChanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationIds?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    volunteerEvents?: EventOrganizerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeChoiceFilter<"User"> | $Enums.UserTypeChoice
    about?: StringNullableFilter<"User"> | string | null
    disabledNotifications?: EnumNotificationTypeChoiceNullableListFilter<"User">
    noOfPasswordsChanged?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notificationIds?: StringNullableListFilter<"User">
    messages?: MessageListRelationFilter
    chats?: ChatListRelationFilter
    notifications?: NotificationListRelationFilter
    events?: EventListRelationFilter
    volunteerEvents?: EventOrganizerListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    about?: SortOrderInput | SortOrder
    disabledNotifications?: SortOrder
    noOfPasswordsChanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeChoiceWithAggregatesFilter<"User"> | $Enums.UserTypeChoice
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    disabledNotifications?: EnumNotificationTypeChoiceNullableListFilter<"User">
    noOfPasswordsChanged?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    notificationIds?: StringNullableListFilter<"User">
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    image?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    paymentScreenshotNeeded?: BoolFilter<"Event"> | boolean
    registrationRequirements?: StringNullableListFilter<"Event">
    registrationPrice?: FloatFilter<"Event"> | number
    leadId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    formResponses?: ResponseListRelationFilter
    tracks?: TrackListRelationFilter
    lead?: XOR<UserRelationFilter, UserWhereInput>
    organizers?: EventOrganizerListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    paymentScreenshotNeeded?: SortOrder
    registrationRequirements?: SortOrder
    registrationPrice?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formResponses?: ResponseOrderByRelationAggregateInput
    tracks?: TrackOrderByRelationAggregateInput
    lead?: UserOrderByWithRelationInput
    organizers?: EventOrganizerOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    image?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    paymentScreenshotNeeded?: BoolFilter<"Event"> | boolean
    registrationRequirements?: StringNullableListFilter<"Event">
    registrationPrice?: FloatFilter<"Event"> | number
    leadId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    formResponses?: ResponseListRelationFilter
    tracks?: TrackListRelationFilter
    lead?: XOR<UserRelationFilter, UserWhereInput>
    organizers?: EventOrganizerListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    paymentScreenshotNeeded?: SortOrder
    registrationRequirements?: SortOrder
    registrationPrice?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumCategoryWithAggregatesFilter<"Event"> | $Enums.Category
    image?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: StringWithAggregatesFilter<"Event"> | string
    venue?: StringWithAggregatesFilter<"Event"> | string
    paymentScreenshotNeeded?: BoolWithAggregatesFilter<"Event"> | boolean
    registrationRequirements?: StringNullableListFilter<"Event">
    registrationPrice?: FloatWithAggregatesFilter<"Event"> | number
    leadId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: StringFilter<"Response"> | string
    fullName?: StringFilter<"Response"> | string
    email?: StringFilter<"Response"> | string
    phone?: StringFilter<"Response"> | string
    extraInfo?: JsonFilter<"Response">
    eventId?: StringFilter<"Response"> | string
    linkedIn?: StringNullableFilter<"Response"> | string | null
    remarks?: StringNullableFilter<"Response"> | string | null
    createdAt?: DateTimeFilter<"Response"> | Date | string
    updatedAt?: DateTimeFilter<"Response"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    tracks?: TrackingDetailListRelationFilter
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    extraInfo?: SortOrder
    eventId?: SortOrder
    linkedIn?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    tracks?: TrackingDetailOrderByRelationAggregateInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    fullName?: StringFilter<"Response"> | string
    email?: StringFilter<"Response"> | string
    phone?: StringFilter<"Response"> | string
    extraInfo?: JsonFilter<"Response">
    eventId?: StringFilter<"Response"> | string
    linkedIn?: StringNullableFilter<"Response"> | string | null
    remarks?: StringNullableFilter<"Response"> | string | null
    createdAt?: DateTimeFilter<"Response"> | Date | string
    updatedAt?: DateTimeFilter<"Response"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    tracks?: TrackingDetailListRelationFilter
  }, "id">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    extraInfo?: SortOrder
    eventId?: SortOrder
    linkedIn?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Response"> | string
    fullName?: StringWithAggregatesFilter<"Response"> | string
    email?: StringWithAggregatesFilter<"Response"> | string
    phone?: StringWithAggregatesFilter<"Response"> | string
    extraInfo?: JsonWithAggregatesFilter<"Response">
    eventId?: StringWithAggregatesFilter<"Response"> | string
    linkedIn?: StringNullableWithAggregatesFilter<"Response"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Response"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Response"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Response"> | Date | string
  }

  export type EventOrganizerWhereInput = {
    AND?: EventOrganizerWhereInput | EventOrganizerWhereInput[]
    OR?: EventOrganizerWhereInput[]
    NOT?: EventOrganizerWhereInput | EventOrganizerWhereInput[]
    id?: StringFilter<"EventOrganizer"> | string
    eventId?: StringFilter<"EventOrganizer"> | string
    role?: EnumEventOrganizerRoleFilter<"EventOrganizer"> | $Enums.EventOrganizerRole
    remarks?: StringNullableFilter<"EventOrganizer"> | string | null
    userId?: StringFilter<"EventOrganizer"> | string
    createdAt?: DateTimeFilter<"EventOrganizer"> | Date | string
    updatedAt?: DateTimeFilter<"EventOrganizer"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EventOrganizerOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    remarks?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventOrganizerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventOrganizerWhereInput | EventOrganizerWhereInput[]
    OR?: EventOrganizerWhereInput[]
    NOT?: EventOrganizerWhereInput | EventOrganizerWhereInput[]
    eventId?: StringFilter<"EventOrganizer"> | string
    role?: EnumEventOrganizerRoleFilter<"EventOrganizer"> | $Enums.EventOrganizerRole
    remarks?: StringNullableFilter<"EventOrganizer"> | string | null
    userId?: StringFilter<"EventOrganizer"> | string
    createdAt?: DateTimeFilter<"EventOrganizer"> | Date | string
    updatedAt?: DateTimeFilter<"EventOrganizer"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EventOrganizerOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    remarks?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventOrganizerCountOrderByAggregateInput
    _max?: EventOrganizerMaxOrderByAggregateInput
    _min?: EventOrganizerMinOrderByAggregateInput
  }

  export type EventOrganizerScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerScalarWhereWithAggregatesInput | EventOrganizerScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerScalarWhereWithAggregatesInput | EventOrganizerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizer"> | string
    eventId?: StringWithAggregatesFilter<"EventOrganizer"> | string
    role?: EnumEventOrganizerRoleWithAggregatesFilter<"EventOrganizer"> | $Enums.EventOrganizerRole
    remarks?: StringNullableWithAggregatesFilter<"EventOrganizer"> | string | null
    userId?: StringWithAggregatesFilter<"EventOrganizer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventOrganizer"> | Date | string
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: StringFilter<"Track"> | string
    title?: StringFilter<"Track"> | string
    description?: StringFilter<"Track"> | string
    eventId?: StringFilter<"Track"> | string
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    trackingDetails?: TrackingDetailListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    trackingDetails?: TrackingDetailOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    title?: StringFilter<"Track"> | string
    description?: StringFilter<"Track"> | string
    eventId?: StringFilter<"Track"> | string
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    trackingDetails?: TrackingDetailListRelationFilter
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Track"> | string
    title?: StringWithAggregatesFilter<"Track"> | string
    description?: StringWithAggregatesFilter<"Track"> | string
    eventId?: StringWithAggregatesFilter<"Track"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Track"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Track"> | Date | string
  }

  export type TrackingDetailWhereInput = {
    AND?: TrackingDetailWhereInput | TrackingDetailWhereInput[]
    OR?: TrackingDetailWhereInput[]
    NOT?: TrackingDetailWhereInput | TrackingDetailWhereInput[]
    id?: StringFilter<"TrackingDetail"> | string
    trackId?: StringFilter<"TrackingDetail"> | string
    responseId?: StringFilter<"TrackingDetail"> | string
    scannedAt?: DateTimeNullableFilter<"TrackingDetail"> | Date | string | null
    createdAt?: DateTimeFilter<"TrackingDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TrackingDetail"> | Date | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
    response?: XOR<ResponseRelationFilter, ResponseWhereInput>
  }

  export type TrackingDetailOrderByWithRelationInput = {
    id?: SortOrder
    trackId?: SortOrder
    responseId?: SortOrder
    scannedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    track?: TrackOrderByWithRelationInput
    response?: ResponseOrderByWithRelationInput
  }

  export type TrackingDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackId_responseId?: TrackingDetailTrackIdResponseIdCompoundUniqueInput
    AND?: TrackingDetailWhereInput | TrackingDetailWhereInput[]
    OR?: TrackingDetailWhereInput[]
    NOT?: TrackingDetailWhereInput | TrackingDetailWhereInput[]
    trackId?: StringFilter<"TrackingDetail"> | string
    responseId?: StringFilter<"TrackingDetail"> | string
    scannedAt?: DateTimeNullableFilter<"TrackingDetail"> | Date | string | null
    createdAt?: DateTimeFilter<"TrackingDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TrackingDetail"> | Date | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
    response?: XOR<ResponseRelationFilter, ResponseWhereInput>
  }, "id" | "trackId_responseId">

  export type TrackingDetailOrderByWithAggregationInput = {
    id?: SortOrder
    trackId?: SortOrder
    responseId?: SortOrder
    scannedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrackingDetailCountOrderByAggregateInput
    _max?: TrackingDetailMaxOrderByAggregateInput
    _min?: TrackingDetailMinOrderByAggregateInput
  }

  export type TrackingDetailScalarWhereWithAggregatesInput = {
    AND?: TrackingDetailScalarWhereWithAggregatesInput | TrackingDetailScalarWhereWithAggregatesInput[]
    OR?: TrackingDetailScalarWhereWithAggregatesInput[]
    NOT?: TrackingDetailScalarWhereWithAggregatesInput | TrackingDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackingDetail"> | string
    trackId?: StringWithAggregatesFilter<"TrackingDetail"> | string
    responseId?: StringWithAggregatesFilter<"TrackingDetail"> | string
    scannedAt?: DateTimeNullableWithAggregatesFilter<"TrackingDetail"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrackingDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrackingDetail"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    read?: BoolFilter<"Chat"> | boolean
    closed?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
    participants?: UserListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    read?: SortOrder
    closed?: SortOrder
    createdAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    participants?: UserOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    read?: BoolFilter<"Chat"> | boolean
    closed?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
    participants?: UserListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    read?: SortOrder
    closed?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    read?: BoolWithAggregatesFilter<"Chat"> | boolean
    closed?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    text?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    text?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    dataId?: StringNullableFilter<"Notification"> | string | null
    dataType?: EnumNotificationDataTypeChoiceNullableFilter<"Notification"> | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFilter<"Notification"> | $Enums.NotificationTypeChoice
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    dataId?: SortOrderInput | SortOrder
    dataType?: SortOrderInput | SortOrder
    type?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    dataId?: StringNullableFilter<"Notification"> | string | null
    dataType?: EnumNotificationDataTypeChoiceNullableFilter<"Notification"> | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFilter<"Notification"> | $Enums.NotificationTypeChoice
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    dataId?: SortOrderInput | SortOrder
    dataType?: SortOrderInput | SortOrder
    type?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    dataId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    dataType?: EnumNotificationDataTypeChoiceNullableWithAggregatesFilter<"Notification"> | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceWithAggregatesFilter<"Notification"> | $Enums.NotificationTypeChoice
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    userId?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutSenderInput
    chats?: ChatCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chats?: ChatUncheckedCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chats?: ChatUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chats?: ChatUncheckedUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseCreateNestedManyWithoutEventInput
    tracks?: TrackCreateNestedManyWithoutEventInput
    lead: UserCreateNestedOneWithoutEventsInput
    organizers?: EventOrganizerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseUncheckedCreateNestedManyWithoutEventInput
    tracks?: TrackUncheckedCreateNestedManyWithoutEventInput
    organizers?: EventOrganizerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUpdateManyWithoutEventNestedInput
    tracks?: TrackUpdateManyWithoutEventNestedInput
    lead?: UserUpdateOneRequiredWithoutEventsNestedInput
    organizers?: EventOrganizerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUncheckedUpdateManyWithoutEventNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutEventNestedInput
    organizers?: EventOrganizerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutFormResponsesInput
    tracks?: TrackingDetailCreateNestedManyWithoutResponseInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    eventId: string
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackingDetailUncheckedCreateNestedManyWithoutResponseInput
  }

  export type ResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutFormResponsesNestedInput
    tracks?: TrackingDetailUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    eventId?: StringFieldUpdateOperationsInput | string
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackingDetailUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type ResponseCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    eventId: string
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    eventId?: StringFieldUpdateOperationsInput | string
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerCreateInput = {
    id?: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutOrganizersInput
    user: UserCreateNestedOneWithoutVolunteerEventsInput
  }

  export type EventOrganizerUncheckedCreateInput = {
    id?: string
    eventId: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutOrganizersNestedInput
    user?: UserUpdateOneRequiredWithoutVolunteerEventsNestedInput
  }

  export type EventOrganizerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerCreateManyInput = {
    id?: string
    eventId: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTracksInput
    trackingDetails?: TrackingDetailCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingDetails?: TrackingDetailUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTracksNestedInput
    trackingDetails?: TrackingDetailUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingDetails?: TrackingDetailUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: string
    title: string
    description: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailCreateInput = {
    id?: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    track: TrackCreateNestedOneWithoutTrackingDetailsInput
    response: ResponseCreateNestedOneWithoutTracksInput
  }

  export type TrackingDetailUncheckedCreateInput = {
    id?: string
    trackId: string
    responseId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutTrackingDetailsNestedInput
    response?: ResponseUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackingDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailCreateManyInput = {
    id?: string
    trackId: string
    responseId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    participants?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    participants?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    participants?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    participants?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    text: string
    senderId: string
    chatId: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    text: string
    senderId: string
    chatId: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserTypeChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeChoice | EnumUserTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeChoiceFilter<$PrismaModel> | $Enums.UserTypeChoice
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

  export type EnumNotificationTypeChoiceNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel> | null
    has?: $Enums.NotificationTypeChoice | EnumNotificationTypeChoiceFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    hasSome?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrganizerListRelationFilter = {
    every?: EventOrganizerWhereInput
    some?: EventOrganizerWhereInput
    none?: EventOrganizerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrganizerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    about?: SortOrder
    disabledNotifications?: SortOrder
    noOfPasswordsChanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationIds?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    noOfPasswordsChanged?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    about?: SortOrder
    noOfPasswordsChanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    about?: SortOrder
    noOfPasswordsChanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    noOfPasswordsChanged?: SortOrder
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

  export type EnumUserTypeChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeChoice | EnumUserTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeChoiceWithAggregatesFilter<$PrismaModel> | $Enums.UserTypeChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeChoiceFilter<$PrismaModel>
    _max?: NestedEnumUserTypeChoiceFilter<$PrismaModel>
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    paymentScreenshotNeeded?: SortOrder
    registrationRequirements?: SortOrder
    registrationPrice?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    registrationPrice?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    paymentScreenshotNeeded?: SortOrder
    registrationPrice?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    paymentScreenshotNeeded?: SortOrder
    registrationPrice?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    registrationPrice?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TrackingDetailListRelationFilter = {
    every?: TrackingDetailWhereInput
    some?: TrackingDetailWhereInput
    none?: TrackingDetailWhereInput
  }

  export type TrackingDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    extraInfo?: SortOrder
    eventId?: SortOrder
    linkedIn?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    eventId?: SortOrder
    linkedIn?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    eventId?: SortOrder
    linkedIn?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumEventOrganizerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrganizerRole | EnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOrganizerRoleFilter<$PrismaModel> | $Enums.EventOrganizerRole
  }

  export type EventOrganizerCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    remarks?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventOrganizerMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    remarks?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventOrganizerMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    remarks?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEventOrganizerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrganizerRole | EnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOrganizerRoleWithAggregatesFilter<$PrismaModel> | $Enums.EventOrganizerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventOrganizerRoleFilter<$PrismaModel>
    _max?: NestedEnumEventOrganizerRoleFilter<$PrismaModel>
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type TrackRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type ResponseRelationFilter = {
    is?: ResponseWhereInput
    isNot?: ResponseWhereInput
  }

  export type TrackingDetailTrackIdResponseIdCompoundUniqueInput = {
    trackId: string
    responseId: string
  }

  export type TrackingDetailCountOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    responseId?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackingDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    responseId?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackingDetailMinOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    responseId?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    read?: SortOrder
    closed?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    read?: SortOrder
    closed?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    read?: SortOrder
    closed?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationDataTypeChoiceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationDataTypeChoice | EnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel> | $Enums.NotificationDataTypeChoice | null
  }

  export type EnumNotificationTypeChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTypeChoice | EnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel> | $Enums.NotificationTypeChoice
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    dataId?: SortOrder
    dataType?: SortOrder
    type?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    dataId?: SortOrder
    dataType?: SortOrder
    type?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    dataId?: SortOrder
    dataType?: SortOrder
    type?: SortOrder
    read?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationDataTypeChoiceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationDataTypeChoice | EnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationDataTypeChoiceNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationDataTypeChoice | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTypeChoice | EnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeChoiceWithAggregatesFilter<$PrismaModel> | $Enums.NotificationTypeChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel>
  }

  export type UserCreatedisabledNotificationsInput = {
    set: $Enums.NotificationTypeChoice[]
  }

  export type UserCreatenotificationIdsInput = {
    set: string[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput> | ChatCreateWithoutParticipantsInput[] | ChatUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutParticipantsInput | ChatCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutLeadInput = {
    create?: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput> | EventCreateWithoutLeadInput[] | EventUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeadInput | EventCreateOrConnectWithoutLeadInput[]
    createMany?: EventCreateManyLeadInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventOrganizerCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput> | EventOrganizerCreateWithoutUserInput[] | EventOrganizerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutUserInput | EventOrganizerCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerCreateManyUserInputEnvelope
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput> | ChatCreateWithoutParticipantsInput[] | ChatUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutParticipantsInput | ChatCreateOrConnectWithoutParticipantsInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput> | EventCreateWithoutLeadInput[] | EventUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeadInput | EventCreateOrConnectWithoutLeadInput[]
    createMany?: EventCreateManyLeadInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventOrganizerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput> | EventOrganizerCreateWithoutUserInput[] | EventOrganizerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutUserInput | EventOrganizerCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerCreateManyUserInputEnvelope
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeChoiceFieldUpdateOperationsInput = {
    set?: $Enums.UserTypeChoice
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatedisabledNotificationsInput = {
    set?: $Enums.NotificationTypeChoice[]
    push?: $Enums.NotificationTypeChoice | $Enums.NotificationTypeChoice[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdatenotificationIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput> | ChatCreateWithoutParticipantsInput[] | ChatUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutParticipantsInput | ChatCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutParticipantsInput | ChatUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutParticipantsInput | ChatUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutParticipantsInput | ChatUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EventUpdateManyWithoutLeadNestedInput = {
    create?: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput> | EventCreateWithoutLeadInput[] | EventUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeadInput | EventCreateOrConnectWithoutLeadInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLeadInput | EventUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: EventCreateManyLeadInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLeadInput | EventUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLeadInput | EventUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventOrganizerUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput> | EventOrganizerCreateWithoutUserInput[] | EventOrganizerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutUserInput | EventOrganizerCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerUpsertWithWhereUniqueWithoutUserInput | EventOrganizerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerCreateManyUserInputEnvelope
    set?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    disconnect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    delete?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    update?: EventOrganizerUpdateWithWhereUniqueWithoutUserInput | EventOrganizerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerUpdateManyWithWhereWithoutUserInput | EventOrganizerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput> | ChatCreateWithoutParticipantsInput[] | ChatUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutParticipantsInput | ChatCreateOrConnectWithoutParticipantsInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutParticipantsInput | ChatUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutParticipantsInput | ChatUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutParticipantsInput | ChatUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput> | EventCreateWithoutLeadInput[] | EventUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeadInput | EventCreateOrConnectWithoutLeadInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLeadInput | EventUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: EventCreateManyLeadInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLeadInput | EventUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLeadInput | EventUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventOrganizerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput> | EventOrganizerCreateWithoutUserInput[] | EventOrganizerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutUserInput | EventOrganizerCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerUpsertWithWhereUniqueWithoutUserInput | EventOrganizerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerCreateManyUserInputEnvelope
    set?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    disconnect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    delete?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    update?: EventOrganizerUpdateWithWhereUniqueWithoutUserInput | EventOrganizerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerUpdateManyWithWhereWithoutUserInput | EventOrganizerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
  }

  export type EventCreateregistrationRequirementsInput = {
    set: string[]
  }

  export type ResponseCreateNestedManyWithoutEventInput = {
    create?: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput> | ResponseCreateWithoutEventInput[] | ResponseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutEventInput | ResponseCreateOrConnectWithoutEventInput[]
    createMany?: ResponseCreateManyEventInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type TrackCreateNestedManyWithoutEventInput = {
    create?: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput> | TrackCreateWithoutEventInput[] | TrackUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutEventInput | TrackCreateOrConnectWithoutEventInput[]
    createMany?: TrackCreateManyEventInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventOrganizerCreateNestedManyWithoutEventInput = {
    create?: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput> | EventOrganizerCreateWithoutEventInput[] | EventOrganizerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutEventInput | EventOrganizerCreateOrConnectWithoutEventInput[]
    createMany?: EventOrganizerCreateManyEventInputEnvelope
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput> | ResponseCreateWithoutEventInput[] | ResponseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutEventInput | ResponseCreateOrConnectWithoutEventInput[]
    createMany?: ResponseCreateManyEventInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput> | TrackCreateWithoutEventInput[] | TrackUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutEventInput | TrackCreateOrConnectWithoutEventInput[]
    createMany?: TrackCreateManyEventInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type EventOrganizerUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput> | EventOrganizerCreateWithoutEventInput[] | EventOrganizerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutEventInput | EventOrganizerCreateOrConnectWithoutEventInput[]
    createMany?: EventOrganizerCreateManyEventInputEnvelope
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateregistrationRequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResponseUpdateManyWithoutEventNestedInput = {
    create?: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput> | ResponseCreateWithoutEventInput[] | ResponseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutEventInput | ResponseCreateOrConnectWithoutEventInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutEventInput | ResponseUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ResponseCreateManyEventInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutEventInput | ResponseUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutEventInput | ResponseUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type TrackUpdateManyWithoutEventNestedInput = {
    create?: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput> | TrackCreateWithoutEventInput[] | TrackUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutEventInput | TrackCreateOrConnectWithoutEventInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutEventInput | TrackUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TrackCreateManyEventInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutEventInput | TrackUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutEventInput | TrackUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventOrganizerUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput> | EventOrganizerCreateWithoutEventInput[] | EventOrganizerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutEventInput | EventOrganizerCreateOrConnectWithoutEventInput[]
    upsert?: EventOrganizerUpsertWithWhereUniqueWithoutEventInput | EventOrganizerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventOrganizerCreateManyEventInputEnvelope
    set?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    disconnect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    delete?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    update?: EventOrganizerUpdateWithWhereUniqueWithoutEventInput | EventOrganizerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventOrganizerUpdateManyWithWhereWithoutEventInput | EventOrganizerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput> | ResponseCreateWithoutEventInput[] | ResponseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutEventInput | ResponseCreateOrConnectWithoutEventInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutEventInput | ResponseUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ResponseCreateManyEventInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutEventInput | ResponseUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutEventInput | ResponseUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput> | TrackCreateWithoutEventInput[] | TrackUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutEventInput | TrackCreateOrConnectWithoutEventInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutEventInput | TrackUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TrackCreateManyEventInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutEventInput | TrackUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutEventInput | TrackUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type EventOrganizerUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput> | EventOrganizerCreateWithoutEventInput[] | EventOrganizerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventOrganizerCreateOrConnectWithoutEventInput | EventOrganizerCreateOrConnectWithoutEventInput[]
    upsert?: EventOrganizerUpsertWithWhereUniqueWithoutEventInput | EventOrganizerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventOrganizerCreateManyEventInputEnvelope
    set?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    disconnect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    delete?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    connect?: EventOrganizerWhereUniqueInput | EventOrganizerWhereUniqueInput[]
    update?: EventOrganizerUpdateWithWhereUniqueWithoutEventInput | EventOrganizerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventOrganizerUpdateManyWithWhereWithoutEventInput | EventOrganizerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutFormResponsesInput = {
    create?: XOR<EventCreateWithoutFormResponsesInput, EventUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormResponsesInput
    connect?: EventWhereUniqueInput
  }

  export type TrackingDetailCreateNestedManyWithoutResponseInput = {
    create?: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput> | TrackingDetailCreateWithoutResponseInput[] | TrackingDetailUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutResponseInput | TrackingDetailCreateOrConnectWithoutResponseInput[]
    createMany?: TrackingDetailCreateManyResponseInputEnvelope
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
  }

  export type TrackingDetailUncheckedCreateNestedManyWithoutResponseInput = {
    create?: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput> | TrackingDetailCreateWithoutResponseInput[] | TrackingDetailUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutResponseInput | TrackingDetailCreateOrConnectWithoutResponseInput[]
    createMany?: TrackingDetailCreateManyResponseInputEnvelope
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutFormResponsesNestedInput = {
    create?: XOR<EventCreateWithoutFormResponsesInput, EventUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormResponsesInput
    upsert?: EventUpsertWithoutFormResponsesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFormResponsesInput, EventUpdateWithoutFormResponsesInput>, EventUncheckedUpdateWithoutFormResponsesInput>
  }

  export type TrackingDetailUpdateManyWithoutResponseNestedInput = {
    create?: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput> | TrackingDetailCreateWithoutResponseInput[] | TrackingDetailUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutResponseInput | TrackingDetailCreateOrConnectWithoutResponseInput[]
    upsert?: TrackingDetailUpsertWithWhereUniqueWithoutResponseInput | TrackingDetailUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: TrackingDetailCreateManyResponseInputEnvelope
    set?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    disconnect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    delete?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    update?: TrackingDetailUpdateWithWhereUniqueWithoutResponseInput | TrackingDetailUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: TrackingDetailUpdateManyWithWhereWithoutResponseInput | TrackingDetailUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
  }

  export type TrackingDetailUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput> | TrackingDetailCreateWithoutResponseInput[] | TrackingDetailUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutResponseInput | TrackingDetailCreateOrConnectWithoutResponseInput[]
    upsert?: TrackingDetailUpsertWithWhereUniqueWithoutResponseInput | TrackingDetailUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: TrackingDetailCreateManyResponseInputEnvelope
    set?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    disconnect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    delete?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    update?: TrackingDetailUpdateWithWhereUniqueWithoutResponseInput | TrackingDetailUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: TrackingDetailUpdateManyWithWhereWithoutResponseInput | TrackingDetailUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutOrganizersInput = {
    create?: XOR<EventCreateWithoutOrganizersInput, EventUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrganizersInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVolunteerEventsInput = {
    create?: XOR<UserCreateWithoutVolunteerEventsInput, UserUncheckedCreateWithoutVolunteerEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEventOrganizerRoleFieldUpdateOperationsInput = {
    set?: $Enums.EventOrganizerRole
  }

  export type EventUpdateOneRequiredWithoutOrganizersNestedInput = {
    create?: XOR<EventCreateWithoutOrganizersInput, EventUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrganizersInput
    upsert?: EventUpsertWithoutOrganizersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutOrganizersInput, EventUpdateWithoutOrganizersInput>, EventUncheckedUpdateWithoutOrganizersInput>
  }

  export type UserUpdateOneRequiredWithoutVolunteerEventsNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerEventsInput, UserUncheckedCreateWithoutVolunteerEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerEventsInput
    upsert?: UserUpsertWithoutVolunteerEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerEventsInput, UserUpdateWithoutVolunteerEventsInput>, UserUncheckedUpdateWithoutVolunteerEventsInput>
  }

  export type EventCreateNestedOneWithoutTracksInput = {
    create?: XOR<EventCreateWithoutTracksInput, EventUncheckedCreateWithoutTracksInput>
    connectOrCreate?: EventCreateOrConnectWithoutTracksInput
    connect?: EventWhereUniqueInput
  }

  export type TrackingDetailCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput> | TrackingDetailCreateWithoutTrackInput[] | TrackingDetailUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutTrackInput | TrackingDetailCreateOrConnectWithoutTrackInput[]
    createMany?: TrackingDetailCreateManyTrackInputEnvelope
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
  }

  export type TrackingDetailUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput> | TrackingDetailCreateWithoutTrackInput[] | TrackingDetailUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutTrackInput | TrackingDetailCreateOrConnectWithoutTrackInput[]
    createMany?: TrackingDetailCreateManyTrackInputEnvelope
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<EventCreateWithoutTracksInput, EventUncheckedCreateWithoutTracksInput>
    connectOrCreate?: EventCreateOrConnectWithoutTracksInput
    upsert?: EventUpsertWithoutTracksInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTracksInput, EventUpdateWithoutTracksInput>, EventUncheckedUpdateWithoutTracksInput>
  }

  export type TrackingDetailUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput> | TrackingDetailCreateWithoutTrackInput[] | TrackingDetailUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutTrackInput | TrackingDetailCreateOrConnectWithoutTrackInput[]
    upsert?: TrackingDetailUpsertWithWhereUniqueWithoutTrackInput | TrackingDetailUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackingDetailCreateManyTrackInputEnvelope
    set?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    disconnect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    delete?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    update?: TrackingDetailUpdateWithWhereUniqueWithoutTrackInput | TrackingDetailUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackingDetailUpdateManyWithWhereWithoutTrackInput | TrackingDetailUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
  }

  export type TrackingDetailUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput> | TrackingDetailCreateWithoutTrackInput[] | TrackingDetailUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackingDetailCreateOrConnectWithoutTrackInput | TrackingDetailCreateOrConnectWithoutTrackInput[]
    upsert?: TrackingDetailUpsertWithWhereUniqueWithoutTrackInput | TrackingDetailUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackingDetailCreateManyTrackInputEnvelope
    set?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    disconnect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    delete?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    connect?: TrackingDetailWhereUniqueInput | TrackingDetailWhereUniqueInput[]
    update?: TrackingDetailUpdateWithWhereUniqueWithoutTrackInput | TrackingDetailUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackingDetailUpdateManyWithWhereWithoutTrackInput | TrackingDetailUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutTrackingDetailsInput = {
    create?: XOR<TrackCreateWithoutTrackingDetailsInput, TrackUncheckedCreateWithoutTrackingDetailsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackingDetailsInput
    connect?: TrackWhereUniqueInput
  }

  export type ResponseCreateNestedOneWithoutTracksInput = {
    create?: XOR<ResponseCreateWithoutTracksInput, ResponseUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutTracksInput
    connect?: ResponseWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TrackUpdateOneRequiredWithoutTrackingDetailsNestedInput = {
    create?: XOR<TrackCreateWithoutTrackingDetailsInput, TrackUncheckedCreateWithoutTrackingDetailsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackingDetailsInput
    upsert?: TrackUpsertWithoutTrackingDetailsInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutTrackingDetailsInput, TrackUpdateWithoutTrackingDetailsInput>, TrackUncheckedUpdateWithoutTrackingDetailsInput>
  }

  export type ResponseUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<ResponseCreateWithoutTracksInput, ResponseUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutTracksInput
    upsert?: ResponseUpsertWithoutTracksInput
    connect?: ResponseWhereUniqueInput
    update?: XOR<XOR<ResponseUpdateToOneWithWhereWithoutTracksInput, ResponseUpdateWithoutTracksInput>, ResponseUncheckedUpdateWithoutTracksInput>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput> | UserCreateWithoutChatsInput[] | UserUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput | UserCreateOrConnectWithoutChatsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatsInput | UserUpsertWithWhereUniqueWithoutChatsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatsInput | UserUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatsInput | UserUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput = {
    set?: $Enums.NotificationDataTypeChoice | null
  }

  export type EnumNotificationTypeChoiceFieldUpdateOperationsInput = {
    set?: $Enums.NotificationTypeChoice
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumUserTypeChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeChoice | EnumUserTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeChoiceFilter<$PrismaModel> | $Enums.UserTypeChoice
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

  export type NestedEnumUserTypeChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeChoice | EnumUserTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypeChoice[] | ListEnumUserTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeChoiceWithAggregatesFilter<$PrismaModel> | $Enums.UserTypeChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeChoiceFilter<$PrismaModel>
    _max?: NestedEnumUserTypeChoiceFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEventOrganizerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrganizerRole | EnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOrganizerRoleFilter<$PrismaModel> | $Enums.EventOrganizerRole
  }

  export type NestedEnumEventOrganizerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrganizerRole | EnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrganizerRole[] | ListEnumEventOrganizerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOrganizerRoleWithAggregatesFilter<$PrismaModel> | $Enums.EventOrganizerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventOrganizerRoleFilter<$PrismaModel>
    _max?: NestedEnumEventOrganizerRoleFilter<$PrismaModel>
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

  export type NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationDataTypeChoice | EnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel> | $Enums.NotificationDataTypeChoice | null
  }

  export type NestedEnumNotificationTypeChoiceFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTypeChoice | EnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel> | $Enums.NotificationTypeChoice
  }

  export type NestedEnumNotificationDataTypeChoiceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationDataTypeChoice | EnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationDataTypeChoice[] | ListEnumNotificationDataTypeChoiceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationDataTypeChoiceNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationDataTypeChoice | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationDataTypeChoiceNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeChoiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationTypeChoice | EnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationTypeChoice[] | ListEnumNotificationTypeChoiceFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeChoiceWithAggregatesFilter<$PrismaModel> | $Enums.NotificationTypeChoice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeChoiceFilter<$PrismaModel>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    text: string
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    text: string
    chatId: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutParticipantsInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutParticipantsInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutParticipantsInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutLeadInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseCreateNestedManyWithoutEventInput
    tracks?: TrackCreateNestedManyWithoutEventInput
    organizers?: EventOrganizerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutLeadInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseUncheckedCreateNestedManyWithoutEventInput
    tracks?: TrackUncheckedCreateNestedManyWithoutEventInput
    organizers?: EventOrganizerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutLeadInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput>
  }

  export type EventCreateManyLeadInputEnvelope = {
    data: EventCreateManyLeadInput | EventCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type EventOrganizerCreateWithoutUserInput = {
    id?: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutOrganizersInput
  }

  export type EventOrganizerUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerCreateOrConnectWithoutUserInput = {
    where: EventOrganizerWhereUniqueInput
    create: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerCreateManyUserInputEnvelope = {
    data: EventOrganizerCreateManyUserInput | EventOrganizerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutParticipantsInput, ChatUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ChatCreateWithoutParticipantsInput, ChatUncheckedCreateWithoutParticipantsInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutParticipantsInput, ChatUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChatUpdateManyWithWhereWithoutParticipantsInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    read?: BoolFilter<"Chat"> | boolean
    closed?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    dataId?: StringNullableFilter<"Notification"> | string | null
    dataType?: EnumNotificationDataTypeChoiceNullableFilter<"Notification"> | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFilter<"Notification"> | $Enums.NotificationTypeChoice
    read?: BoolFilter<"Notification"> | boolean
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutLeadInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutLeadInput, EventUncheckedUpdateWithoutLeadInput>
    create: XOR<EventCreateWithoutLeadInput, EventUncheckedCreateWithoutLeadInput>
  }

  export type EventUpdateWithWhereUniqueWithoutLeadInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutLeadInput, EventUncheckedUpdateWithoutLeadInput>
  }

  export type EventUpdateManyWithWhereWithoutLeadInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutLeadInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    image?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    paymentScreenshotNeeded?: BoolFilter<"Event"> | boolean
    registrationRequirements?: StringNullableListFilter<"Event">
    registrationPrice?: FloatFilter<"Event"> | number
    leadId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrganizerUpsertWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerWhereUniqueInput
    update: XOR<EventOrganizerUpdateWithoutUserInput, EventOrganizerUncheckedUpdateWithoutUserInput>
    create: XOR<EventOrganizerCreateWithoutUserInput, EventOrganizerUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerUpdateWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerWhereUniqueInput
    data: XOR<EventOrganizerUpdateWithoutUserInput, EventOrganizerUncheckedUpdateWithoutUserInput>
  }

  export type EventOrganizerUpdateManyWithWhereWithoutUserInput = {
    where: EventOrganizerScalarWhereInput
    data: XOR<EventOrganizerUpdateManyMutationInput, EventOrganizerUncheckedUpdateManyWithoutUserInput>
  }

  export type EventOrganizerScalarWhereInput = {
    AND?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
    OR?: EventOrganizerScalarWhereInput[]
    NOT?: EventOrganizerScalarWhereInput | EventOrganizerScalarWhereInput[]
    id?: StringFilter<"EventOrganizer"> | string
    eventId?: StringFilter<"EventOrganizer"> | string
    role?: EnumEventOrganizerRoleFilter<"EventOrganizer"> | $Enums.EventOrganizerRole
    remarks?: StringNullableFilter<"EventOrganizer"> | string | null
    userId?: StringFilter<"EventOrganizer"> | string
    createdAt?: DateTimeFilter<"EventOrganizer"> | Date | string
    updatedAt?: DateTimeFilter<"EventOrganizer"> | Date | string
  }

  export type ResponseCreateWithoutEventInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackingDetailCreateNestedManyWithoutResponseInput
  }

  export type ResponseUncheckedCreateWithoutEventInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackingDetailUncheckedCreateNestedManyWithoutResponseInput
  }

  export type ResponseCreateOrConnectWithoutEventInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput>
  }

  export type ResponseCreateManyEventInputEnvelope = {
    data: ResponseCreateManyEventInput | ResponseCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TrackCreateWithoutEventInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingDetails?: TrackingDetailCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutEventInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingDetails?: TrackingDetailUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutEventInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput>
  }

  export type TrackCreateManyEventInputEnvelope = {
    data: TrackCreateManyEventInput | TrackCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutSenderInput
    chats?: ChatCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteerEvents?: EventOrganizerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chats?: ChatUncheckedCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteerEvents?: EventOrganizerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventOrganizerCreateWithoutEventInput = {
    id?: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVolunteerEventsInput
  }

  export type EventOrganizerUncheckedCreateWithoutEventInput = {
    id?: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerCreateOrConnectWithoutEventInput = {
    where: EventOrganizerWhereUniqueInput
    create: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput>
  }

  export type EventOrganizerCreateManyEventInputEnvelope = {
    data: EventOrganizerCreateManyEventInput | EventOrganizerCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ResponseUpsertWithWhereUniqueWithoutEventInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutEventInput, ResponseUncheckedUpdateWithoutEventInput>
    create: XOR<ResponseCreateWithoutEventInput, ResponseUncheckedCreateWithoutEventInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutEventInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutEventInput, ResponseUncheckedUpdateWithoutEventInput>
  }

  export type ResponseUpdateManyWithWhereWithoutEventInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutEventInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: StringFilter<"Response"> | string
    fullName?: StringFilter<"Response"> | string
    email?: StringFilter<"Response"> | string
    phone?: StringFilter<"Response"> | string
    extraInfo?: JsonFilter<"Response">
    eventId?: StringFilter<"Response"> | string
    linkedIn?: StringNullableFilter<"Response"> | string | null
    remarks?: StringNullableFilter<"Response"> | string | null
    createdAt?: DateTimeFilter<"Response"> | Date | string
    updatedAt?: DateTimeFilter<"Response"> | Date | string
  }

  export type TrackUpsertWithWhereUniqueWithoutEventInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutEventInput, TrackUncheckedUpdateWithoutEventInput>
    create: XOR<TrackCreateWithoutEventInput, TrackUncheckedCreateWithoutEventInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutEventInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutEventInput, TrackUncheckedUpdateWithoutEventInput>
  }

  export type TrackUpdateManyWithWhereWithoutEventInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutEventInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: StringFilter<"Track"> | string
    title?: StringFilter<"Track"> | string
    description?: StringFilter<"Track"> | string
    eventId?: StringFilter<"Track"> | string
    createdAt?: DateTimeFilter<"Track"> | Date | string
    updatedAt?: DateTimeFilter<"Track"> | Date | string
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chats?: ChatUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteerEvents?: EventOrganizerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chats?: ChatUncheckedUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteerEvents?: EventOrganizerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUpsertWithWhereUniqueWithoutEventInput = {
    where: EventOrganizerWhereUniqueInput
    update: XOR<EventOrganizerUpdateWithoutEventInput, EventOrganizerUncheckedUpdateWithoutEventInput>
    create: XOR<EventOrganizerCreateWithoutEventInput, EventOrganizerUncheckedCreateWithoutEventInput>
  }

  export type EventOrganizerUpdateWithWhereUniqueWithoutEventInput = {
    where: EventOrganizerWhereUniqueInput
    data: XOR<EventOrganizerUpdateWithoutEventInput, EventOrganizerUncheckedUpdateWithoutEventInput>
  }

  export type EventOrganizerUpdateManyWithWhereWithoutEventInput = {
    where: EventOrganizerScalarWhereInput
    data: XOR<EventOrganizerUpdateManyMutationInput, EventOrganizerUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutFormResponsesInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackCreateNestedManyWithoutEventInput
    lead: UserCreateNestedOneWithoutEventsInput
    organizers?: EventOrganizerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFormResponsesInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackUncheckedCreateNestedManyWithoutEventInput
    organizers?: EventOrganizerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFormResponsesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFormResponsesInput, EventUncheckedCreateWithoutFormResponsesInput>
  }

  export type TrackingDetailCreateWithoutResponseInput = {
    id?: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    track: TrackCreateNestedOneWithoutTrackingDetailsInput
  }

  export type TrackingDetailUncheckedCreateWithoutResponseInput = {
    id?: string
    trackId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailCreateOrConnectWithoutResponseInput = {
    where: TrackingDetailWhereUniqueInput
    create: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput>
  }

  export type TrackingDetailCreateManyResponseInputEnvelope = {
    data: TrackingDetailCreateManyResponseInput | TrackingDetailCreateManyResponseInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutFormResponsesInput = {
    update: XOR<EventUpdateWithoutFormResponsesInput, EventUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<EventCreateWithoutFormResponsesInput, EventUncheckedCreateWithoutFormResponsesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFormResponsesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFormResponsesInput, EventUncheckedUpdateWithoutFormResponsesInput>
  }

  export type EventUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUpdateManyWithoutEventNestedInput
    lead?: UserUpdateOneRequiredWithoutEventsNestedInput
    organizers?: EventOrganizerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackUncheckedUpdateManyWithoutEventNestedInput
    organizers?: EventOrganizerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TrackingDetailUpsertWithWhereUniqueWithoutResponseInput = {
    where: TrackingDetailWhereUniqueInput
    update: XOR<TrackingDetailUpdateWithoutResponseInput, TrackingDetailUncheckedUpdateWithoutResponseInput>
    create: XOR<TrackingDetailCreateWithoutResponseInput, TrackingDetailUncheckedCreateWithoutResponseInput>
  }

  export type TrackingDetailUpdateWithWhereUniqueWithoutResponseInput = {
    where: TrackingDetailWhereUniqueInput
    data: XOR<TrackingDetailUpdateWithoutResponseInput, TrackingDetailUncheckedUpdateWithoutResponseInput>
  }

  export type TrackingDetailUpdateManyWithWhereWithoutResponseInput = {
    where: TrackingDetailScalarWhereInput
    data: XOR<TrackingDetailUpdateManyMutationInput, TrackingDetailUncheckedUpdateManyWithoutResponseInput>
  }

  export type TrackingDetailScalarWhereInput = {
    AND?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
    OR?: TrackingDetailScalarWhereInput[]
    NOT?: TrackingDetailScalarWhereInput | TrackingDetailScalarWhereInput[]
    id?: StringFilter<"TrackingDetail"> | string
    trackId?: StringFilter<"TrackingDetail"> | string
    responseId?: StringFilter<"TrackingDetail"> | string
    scannedAt?: DateTimeNullableFilter<"TrackingDetail"> | Date | string | null
    createdAt?: DateTimeFilter<"TrackingDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TrackingDetail"> | Date | string
  }

  export type EventCreateWithoutOrganizersInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseCreateNestedManyWithoutEventInput
    tracks?: TrackCreateNestedManyWithoutEventInput
    lead: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutOrganizersInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseUncheckedCreateNestedManyWithoutEventInput
    tracks?: TrackUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizersInput, EventUncheckedCreateWithoutOrganizersInput>
  }

  export type UserCreateWithoutVolunteerEventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutSenderInput
    chats?: ChatCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutLeadInput
  }

  export type UserUncheckedCreateWithoutVolunteerEventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chats?: ChatUncheckedCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutLeadInput
  }

  export type UserCreateOrConnectWithoutVolunteerEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerEventsInput, UserUncheckedCreateWithoutVolunteerEventsInput>
  }

  export type EventUpsertWithoutOrganizersInput = {
    update: XOR<EventUpdateWithoutOrganizersInput, EventUncheckedUpdateWithoutOrganizersInput>
    create: XOR<EventCreateWithoutOrganizersInput, EventUncheckedCreateWithoutOrganizersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutOrganizersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutOrganizersInput, EventUncheckedUpdateWithoutOrganizersInput>
  }

  export type EventUpdateWithoutOrganizersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUpdateManyWithoutEventNestedInput
    tracks?: TrackUpdateManyWithoutEventNestedInput
    lead?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUncheckedUpdateManyWithoutEventNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutVolunteerEventsInput = {
    update: XOR<UserUpdateWithoutVolunteerEventsInput, UserUncheckedUpdateWithoutVolunteerEventsInput>
    create: XOR<UserCreateWithoutVolunteerEventsInput, UserUncheckedCreateWithoutVolunteerEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerEventsInput, UserUncheckedUpdateWithoutVolunteerEventsInput>
  }

  export type UserUpdateWithoutVolunteerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chats?: ChatUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutLeadNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chats?: ChatUncheckedUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type EventCreateWithoutTracksInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseCreateNestedManyWithoutEventInput
    lead: UserCreateNestedOneWithoutEventsInput
    organizers?: EventOrganizerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTracksInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: ResponseUncheckedCreateNestedManyWithoutEventInput
    organizers?: EventOrganizerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTracksInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTracksInput, EventUncheckedCreateWithoutTracksInput>
  }

  export type TrackingDetailCreateWithoutTrackInput = {
    id?: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    response: ResponseCreateNestedOneWithoutTracksInput
  }

  export type TrackingDetailUncheckedCreateWithoutTrackInput = {
    id?: string
    responseId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailCreateOrConnectWithoutTrackInput = {
    where: TrackingDetailWhereUniqueInput
    create: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput>
  }

  export type TrackingDetailCreateManyTrackInputEnvelope = {
    data: TrackingDetailCreateManyTrackInput | TrackingDetailCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTracksInput = {
    update: XOR<EventUpdateWithoutTracksInput, EventUncheckedUpdateWithoutTracksInput>
    create: XOR<EventCreateWithoutTracksInput, EventUncheckedCreateWithoutTracksInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTracksInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTracksInput, EventUncheckedUpdateWithoutTracksInput>
  }

  export type EventUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUpdateManyWithoutEventNestedInput
    lead?: UserUpdateOneRequiredWithoutEventsNestedInput
    organizers?: EventOrganizerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUncheckedUpdateManyWithoutEventNestedInput
    organizers?: EventOrganizerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TrackingDetailUpsertWithWhereUniqueWithoutTrackInput = {
    where: TrackingDetailWhereUniqueInput
    update: XOR<TrackingDetailUpdateWithoutTrackInput, TrackingDetailUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackingDetailCreateWithoutTrackInput, TrackingDetailUncheckedCreateWithoutTrackInput>
  }

  export type TrackingDetailUpdateWithWhereUniqueWithoutTrackInput = {
    where: TrackingDetailWhereUniqueInput
    data: XOR<TrackingDetailUpdateWithoutTrackInput, TrackingDetailUncheckedUpdateWithoutTrackInput>
  }

  export type TrackingDetailUpdateManyWithWhereWithoutTrackInput = {
    where: TrackingDetailScalarWhereInput
    data: XOR<TrackingDetailUpdateManyMutationInput, TrackingDetailUncheckedUpdateManyWithoutTrackInput>
  }

  export type TrackCreateWithoutTrackingDetailsInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutTrackingDetailsInput = {
    id?: string
    title: string
    description: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackCreateOrConnectWithoutTrackingDetailsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutTrackingDetailsInput, TrackUncheckedCreateWithoutTrackingDetailsInput>
  }

  export type ResponseCreateWithoutTracksInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutFormResponsesInput
  }

  export type ResponseUncheckedCreateWithoutTracksInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    eventId: string
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResponseCreateOrConnectWithoutTracksInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutTracksInput, ResponseUncheckedCreateWithoutTracksInput>
  }

  export type TrackUpsertWithoutTrackingDetailsInput = {
    update: XOR<TrackUpdateWithoutTrackingDetailsInput, TrackUncheckedUpdateWithoutTrackingDetailsInput>
    create: XOR<TrackCreateWithoutTrackingDetailsInput, TrackUncheckedCreateWithoutTrackingDetailsInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutTrackingDetailsInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutTrackingDetailsInput, TrackUncheckedUpdateWithoutTrackingDetailsInput>
  }

  export type TrackUpdateWithoutTrackingDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutTrackingDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUpsertWithoutTracksInput = {
    update: XOR<ResponseUpdateWithoutTracksInput, ResponseUncheckedUpdateWithoutTracksInput>
    create: XOR<ResponseCreateWithoutTracksInput, ResponseUncheckedCreateWithoutTracksInput>
    where?: ResponseWhereInput
  }

  export type ResponseUpdateToOneWithWhereWithoutTracksInput = {
    where?: ResponseWhereInput
    data: XOR<ResponseUpdateWithoutTracksInput, ResponseUncheckedUpdateWithoutTracksInput>
  }

  export type ResponseUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutFormResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    eventId?: StringFieldUpdateOperationsInput | string
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    text: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    text: string
    senderId: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutSenderInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    type?: EnumUserTypeChoiceFilter<"User"> | $Enums.UserTypeChoice
    about?: StringNullableFilter<"User"> | string | null
    disabledNotifications?: EnumNotificationTypeChoiceNullableListFilter<"User">
    noOfPasswordsChanged?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notificationIds?: StringNullableListFilter<"User">
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    chats?: ChatCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    chats?: ChatUncheckedCreateNestedManyWithoutParticipantsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    participants?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    read?: boolean
    closed?: boolean
    createdAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    chats?: ChatUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    chats?: ChatUncheckedUpdateManyWithoutParticipantsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageCreateNestedManyWithoutSenderInput
    chats?: ChatCreateNestedManyWithoutParticipantsInput
    events?: EventCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone: string
    type?: $Enums.UserTypeChoice
    about?: string | null
    disabledNotifications?: UserCreatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationIds?: UserCreatenotificationIdsInput | string[]
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chats?: ChatUncheckedCreateNestedManyWithoutParticipantsInput
    events?: EventUncheckedCreateNestedManyWithoutLeadInput
    volunteerEvents?: EventOrganizerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chats?: ChatUpdateManyWithoutParticipantsNestedInput
    events?: EventUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chats?: ChatUncheckedUpdateManyWithoutParticipantsNestedInput
    events?: EventUncheckedUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    text: string
    chatId: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    body: string
    dataId?: string | null
    dataType?: $Enums.NotificationDataTypeChoice | null
    type: $Enums.NotificationTypeChoice
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyLeadInput = {
    id?: string
    title: string
    description: string
    category: $Enums.Category
    image: string
    date: Date | string
    time: string
    venue: string
    paymentScreenshotNeeded: boolean
    registrationRequirements?: EventCreateregistrationRequirementsInput | string[]
    registrationPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerCreateManyUserInput = {
    id?: string
    eventId: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    dataId?: NullableStringFieldUpdateOperationsInput | string | null
    dataType?: NullableEnumNotificationDataTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationDataTypeChoice | null
    type?: EnumNotificationTypeChoiceFieldUpdateOperationsInput | $Enums.NotificationTypeChoice
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUpdateManyWithoutEventNestedInput
    tracks?: TrackUpdateManyWithoutEventNestedInput
    organizers?: EventOrganizerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: ResponseUncheckedUpdateManyWithoutEventNestedInput
    tracks?: TrackUncheckedUpdateManyWithoutEventNestedInput
    organizers?: EventOrganizerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    paymentScreenshotNeeded?: BoolFieldUpdateOperationsInput | boolean
    registrationRequirements?: EventUpdateregistrationRequirementsInput | string[]
    registrationPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type EventOrganizerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateManyEventInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    extraInfo: JsonNullValueInput | InputJsonValue
    linkedIn?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackCreateManyEventInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventOrganizerCreateManyEventInput = {
    id?: string
    role: $Enums.EventOrganizerRole
    remarks?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResponseUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackingDetailUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackingDetailUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    extraInfo?: JsonNullValueInput | InputJsonValue
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingDetails?: TrackingDetailUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingDetails?: TrackingDetailUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVolunteerEventsNestedInput
  }

  export type EventOrganizerUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumEventOrganizerRoleFieldUpdateOperationsInput | $Enums.EventOrganizerRole
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailCreateManyResponseInput = {
    id?: string
    trackId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutTrackingDetailsNestedInput
  }

  export type TrackingDetailUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailUncheckedUpdateManyWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailCreateManyTrackInput = {
    id?: string
    responseId: string
    scannedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackingDetailUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: ResponseUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TrackingDetailUncheckedUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingDetailUncheckedUpdateManyWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    scannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    text: string
    senderId: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutLeadNestedInput
    volunteerEvents?: EventOrganizerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeChoiceFieldUpdateOperationsInput | $Enums.UserTypeChoice
    about?: NullableStringFieldUpdateOperationsInput | string | null
    disabledNotifications?: UserUpdatedisabledNotificationsInput | $Enums.NotificationTypeChoice[]
    noOfPasswordsChanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationIds?: UserUpdatenotificationIdsInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResponseCountOutputTypeDefaultArgs instead
     */
    export type ResponseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResponseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackCountOutputTypeDefaultArgs instead
     */
    export type TrackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCountOutputTypeDefaultArgs instead
     */
    export type ChatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResponseDefaultArgs instead
     */
    export type ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventOrganizerDefaultArgs instead
     */
    export type EventOrganizerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventOrganizerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackingDetailDefaultArgs instead
     */
    export type TrackingDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackingDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatDefaultArgs instead
     */
    export type ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

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