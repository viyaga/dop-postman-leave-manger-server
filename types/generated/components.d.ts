import type { Schema, Struct } from '@strapi/strapi';

export interface LeaveAvailedLeave extends Struct.ComponentSchema {
  collectionName: 'components_leave_availed_leaves';
  info: {
    displayName: 'availed_leave';
  };
  attributes: {
    cl: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    rh: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface LeaveBalance extends Struct.ComponentSchema {
  collectionName: 'components_leave_balances';
  info: {
    description: '';
    displayName: 'balance';
  };
  attributes: {
    cl: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    el: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    rh: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface LeavePeriod extends Struct.ComponentSchema {
  collectionName: 'components_leave_periods';
  info: {
    displayName: 'period';
  };
  attributes: {
    days: Schema.Attribute.Integer;
    from: Schema.Attribute.Date;
    to: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'leave.availed-leave': LeaveAvailedLeave;
      'leave.balance': LeaveBalance;
      'leave.period': LeavePeriod;
    }
  }
}
