import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export type ResponseList<T> = {
  total: number;
  page: number;
  limit: number;
  records: T[];
};

export const ApiListOkResponse = (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  model: string | Function,
): MethodDecorator & ClassDecorator =>
  ApiOkResponse({
    schema: {
      type: 'array',
      items: { $ref: getSchemaPath(model) },
    },
  });

export const ApiDetailOkResponse = (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  model: string | Function,
): MethodDecorator & ClassDecorator =>
  ApiOkResponse({
    type: model,
  });
