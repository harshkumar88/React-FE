export const UserEnum = Object.freeze({
    CHIEF_ADMIN: 'Chief Admin',
    COMPANY_ADMIN: 'Company Admin',
    SUPPORT_USER: 'Support User',
    USER: 'User',
  });
  
  export const VariableTypeEnum = Object.freeze({
    TEXT: 'text',
    MULTI_SELECT: 'multiSelect',
    NUMERIC: 'numeric',
    SINGLE_SELECT: 'singleSelect',
    EMAIL: 'email',
    DATE: 'date',
    PHONE_NUMBER: 'phoneNumber',
  });
  
  export const VariableCategoryEnum = Object.freeze({
    CUSTOM: 'custom',
    STANDARD: 'standard',
  });
  
  export const ContentTypeEnum = Object.freeze({
    PDF: 'PDF',
    VIDEO: 'video',
    DOCUMENT: 'document',
    POWERPOINT: 'powerPoint',
    SCORM: 'scorm',
    ASSESSMENT: 'assessment',
  });
  
  export const ProfileTypeEnum = Object.freeze({
    TENANT_LOGO: 'tenantLogo',
    USER_PROFILE: 'userProfile',
    CONTENT: 'content',
  });
  
  export const ClientTypeEnum = Object.freeze({
    TEST: 'Test',
    POC: 'POC',
    PRODUCTION: 'Production',
  });
  
  export const FilterTypeEnum = Object.freeze({
    DROPDOWN: 'DropDown',
    DATE_RANGE: 'DateRange',
    NUMBER_RANGE: 'NumberRange',
  });
  
  export const CohortRuleDataTypeEnum = Object.freeze({
    DROP_DOWN: 'dropDown',
    DATE: 'date',
  });
  
  export const ContentVideoType = Object.freeze({
    FILE: 'file',
    LINK: 'link',
    NONE: '',
  });
  
  export const JourneyType = Object.freeze({
    FLOW: 'flow',
    TIME: 'type',
  });
  
  export const JourneyScreenType = Object.freeze({
    CONTENT: 'content',
    ASSESSMENT: 'assessment',
    SURVEY: 'survey',
  });
  
  export const JourneyScreenComponentType = Object.freeze({
    TEXT_HEADING: 'textHeading',
    TEXT_SUBHEADING: 'textSubHeading',
    TEXT_BODY: 'textBody',
    CONTENT: 'content',
    MEDIA: 'media',
  });
  