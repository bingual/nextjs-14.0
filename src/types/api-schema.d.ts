/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/schema/': {
    /**
     * @description OpenApi3 schema for this API. Format can be selected via content negotiation.
     *
     * - YAML: application/vnd.oai.openapi
     * - JSON: application/vnd.oai.openapi+json
     */
    get: operations['api_schema_retrieve'];
  };
  '/api/shop/product/': {
    get: operations['api_shop_product_list'];
    post: operations['api_shop_product_create'];
  };
  '/api/shop/product/{id}/': {
    get: operations['api_shop_product_retrieve'];
    put: operations['api_shop_product_update'];
    delete: operations['api_shop_product_destroy'];
    patch: operations['api_shop_product_partial_update'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    PaginatedProductList: {
      /** @example 123 */
      count: number;
      /**
       * Format: uri
       * @example http://api.example.org/accounts/?page=4
       */
      next?: string | null;
      /**
       * Format: uri
       * @example http://api.example.org/accounts/?page=2
       */
      previous?: string | null;
      results: components['schemas']['Product'][];
    };
    PatchedProduct: {
      /** Format: uri */
      url?: string;
      /** ID */
      pk?: number;
      brand?: string;
      category?: string;
      /** Format: uri */
      thumb?: string;
      name?: string;
      price?: number;
      sale_price?: number;
    };
    Product: {
      /** Format: uri */
      url: string;
      /** ID */
      pk: number;
      brand: string;
      category: string;
      /** Format: uri */
      thumb: string;
      name: string;
      price: number;
      sale_price: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /**
   * @description OpenApi3 schema for this API. Format can be selected via content negotiation.
   *
   * - YAML: application/vnd.oai.openapi
   * - JSON: application/vnd.oai.openapi+json
   */
  api_schema_retrieve: {
    parameters: {
      query?: {
        format?: 'json' | 'yaml';
        lang?:
          | 'af'
          | 'ar'
          | 'ar-dz'
          | 'ast'
          | 'az'
          | 'be'
          | 'bg'
          | 'bn'
          | 'br'
          | 'bs'
          | 'ca'
          | 'ckb'
          | 'cs'
          | 'cy'
          | 'da'
          | 'de'
          | 'dsb'
          | 'el'
          | 'en'
          | 'en-au'
          | 'en-gb'
          | 'eo'
          | 'es'
          | 'es-ar'
          | 'es-co'
          | 'es-mx'
          | 'es-ni'
          | 'es-ve'
          | 'et'
          | 'eu'
          | 'fa'
          | 'fi'
          | 'fr'
          | 'fy'
          | 'ga'
          | 'gd'
          | 'gl'
          | 'he'
          | 'hi'
          | 'hr'
          | 'hsb'
          | 'hu'
          | 'hy'
          | 'ia'
          | 'id'
          | 'ig'
          | 'io'
          | 'is'
          | 'it'
          | 'ja'
          | 'ka'
          | 'kab'
          | 'kk'
          | 'km'
          | 'kn'
          | 'ko'
          | 'ky'
          | 'lb'
          | 'lt'
          | 'lv'
          | 'mk'
          | 'ml'
          | 'mn'
          | 'mr'
          | 'ms'
          | 'my'
          | 'nb'
          | 'ne'
          | 'nl'
          | 'nn'
          | 'os'
          | 'pa'
          | 'pl'
          | 'pt'
          | 'pt-br'
          | 'ro'
          | 'ru'
          | 'sk'
          | 'sl'
          | 'sq'
          | 'sr'
          | 'sr-latn'
          | 'sv'
          | 'sw'
          | 'ta'
          | 'te'
          | 'tg'
          | 'th'
          | 'tk'
          | 'tr'
          | 'tt'
          | 'udm'
          | 'ug'
          | 'uk'
          | 'ur'
          | 'uz'
          | 'vi'
          | 'zh-hans'
          | 'zh-hant';
      };
    };
    responses: {
      200: {
        content: {
          'application/vnd.oai.openapi': {
            [key: string]: unknown;
          };
          'application/yaml': {
            [key: string]: unknown;
          };
          'application/vnd.oai.openapi+json': {
            [key: string]: unknown;
          };
          'application/json': {
            [key: string]: unknown;
          };
        };
      };
    };
  };
  api_shop_product_list: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
        /** @description Which field to use when ordering the results. */
        ordering?: string;
        /** @description A page number within the paginated result set. */
        page?: number;
        /** @description A search term. */
        search?: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PaginatedProductList'];
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': components['schemas']['PaginatedProductList'];
        };
      };
    };
  };
  api_shop_product_create: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Product'];
        'application/x-www-form-urlencoded': components['schemas']['Product'];
        'multipart/form-data': components['schemas']['Product'];
      };
    };
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['Product'];
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': components['schemas']['Product'];
        };
      };
    };
  };
  api_shop_product_retrieve: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
      };
      path: {
        /** @description A unique integer value identifying this product. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Product'];
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': components['schemas']['Product'];
        };
      };
    };
  };
  api_shop_product_update: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
      };
      path: {
        /** @description A unique integer value identifying this product. */
        id: number;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Product'];
        'application/x-www-form-urlencoded': components['schemas']['Product'];
        'multipart/form-data': components['schemas']['Product'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Product'];
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': components['schemas']['Product'];
        };
      };
    };
  };
  api_shop_product_destroy: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
      };
      path: {
        /** @description A unique integer value identifying this product. */
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
    };
  };
  api_shop_product_partial_update: {
    parameters: {
      query?: {
        format?: 'json' | 'xlsx';
      };
      path: {
        /** @description A unique integer value identifying this product. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedProduct'];
        'application/x-www-form-urlencoded': components['schemas']['PatchedProduct'];
        'multipart/form-data': components['schemas']['PatchedProduct'];
      };
    };
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Product'];
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': components['schemas']['Product'];
        };
      };
    };
  };
}
