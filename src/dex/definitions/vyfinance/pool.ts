import { DatumParameterKey } from '@app/constants';

export default {
  constructor: 0,
  fields: [
    {
      int: DatumParameterKey.PoolAssetABarFee
    },
    {
      int: DatumParameterKey.PoolAssetBBarFee
    },
    {
      int: DatumParameterKey.TotalLpTokens
    }
  ]
};