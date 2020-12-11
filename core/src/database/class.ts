import type { AuthOptions } from '../app';

import { LCEncode, LCObject, omitReservedKeys } from './lcobject';
import { LCQuery } from './query';

export interface AddObjectOptions extends AuthOptions {
  fetch?: boolean;
}

export class LCClass extends LCQuery {
  object(id: string): LCObject {
    return new LCObject(this.app, this.className, id);
  }

  add(data: Record<string, any>, options?: AddObjectOptions) {
    return this.app.request(
      {
        method: 'POST',
        path: `/1.1/classes/${this.className}`,
        query: {
          fetchWhenSave: options?.fetch,
        },
        body: LCEncode(omitReservedKeys(data)),
      },
      options
    );
  }
}