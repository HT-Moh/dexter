import { DatumParameterKey } from '@app/constants';

export default {
  constructor: 0,
  fields: [
    {
      bytes: DatumParameterKey.SenderPubKeyHash
    },
    {
      constructor: DatumParameterKey.Action,
      fields: [
        {
          int: DatumParameterKey.MinReceive
        }
      ]
    }
  ]
};