/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EsFieldName } from '../../../../../../../common/types/fields';
import {
  PivotSupportedAggs,
  PIVOT_SUPPORTED_AGGS,
} from '../../../../../../../common/types/pivot_aggs';
import {
  PERCENTILES_AGG_DEFAULT_PERCENTS,
  PivotAggsConfigWithUiSupport,
} from '../../../../../common';
import { getFilterAggConfig } from './filter_agg/config';

/**
 * Provides a configuration based on the aggregation type.
 */
export function getDefaultAggregationConfig(
  aggName: string,
  dropDownName: string,
  fieldName: EsFieldName,
  agg: PivotSupportedAggs
): PivotAggsConfigWithUiSupport {
  const commonConfig = {
    agg,
    aggName,
    dropDownName,
    field: fieldName,
  };

  switch (agg) {
    case PIVOT_SUPPORTED_AGGS.PERCENTILES:
      return {
        ...commonConfig,
        agg,
        percents: PERCENTILES_AGG_DEFAULT_PERCENTS,
      };
    case PIVOT_SUPPORTED_AGGS.FILTER:
      return getFilterAggConfig(commonConfig);
    default:
      return commonConfig;
  }
}
