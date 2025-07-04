// constants/constant.js

import { UserEnum } from "../models/enums";

export const TOKEN_KEY = "linemate_FE_access_token";
export const QUIZ_STORAGE_KEY = "linemate_Quiz";
export const USER_TYPE_KEY = "userType";

export const Roles = {
  USER: UserEnum.User,
  SUPPORT_USER: UserEnum["Support User"],
  CHIEF_ADMIN: UserEnum["Chief Admin"],
  COMPANY_ADMIN: UserEnum["Company Admin"],
};

export const OperatorList = ["and", "or"];

export const ApiFilters = {
  page: 1,
  limit: 10,
  sortField: "id",
  sortOrder: "ASC",
  search: "",
  filter: {},
};

export const ROUTES = {
  APP: "",
  LOGIN: "/auth/login",
  RESET_PASSWORD: "/auth/reset-password",
  SET_PASSWORD: "/auth/set-password",
  VERIFICATION: "/auth/verification",
  CHANGE_PASSWORD: "/auth/change-password",
  USERS: "/users",
  COMPANIES: "/companies",
  COMPANY_CREATE: "/companies/create",
  COMPANY_EDIT: "/companies/edit",
  COMPANY_VIEW: "/companies/view",
  EMPLOYEES: "/employees",
  VARIABLES: "/variables",
  COHORTS: "/cohorts",
  TEMPLATES: "/templates",
  CAMPAIGNS: "/campaigns",
  WORKFLOWS: "/workflows",
  DASHBOARD: "/dashboard",
  JOURNEYS: "/journeys",
  PERMISSIONS: "/permissions",
  COMMUNICATIONS: "/communications",
  CONTENT_LIBRARY: "/content-library",
  AUTOMATION: "/automation",
  QUESTIONNAIRE: "/content-library/:id/:assessmentId/questionnaire",
  LEADERBOARD_CONFIG: "/leaderboard/config",
  CERTIFICATES: "/certificates",
};

export const BREADCRUMBS = {
  COMPANIES: [{ label: "company.allCompanies", url: ROUTES.COMPANIES }],
  COMPANY_CREATE: [
    { label: "company.allCompanies", url: ROUTES.COMPANIES },
    { label: "company.newCompany", url: ROUTES.COMPANY_CREATE },
  ],
  COMPANY_EDIT: [
    { label: "company.allCompanies", url: ROUTES.COMPANIES },
    { label: "company.editCompany", url: ROUTES.COMPANY_EDIT },
  ],
  COMPANY_VIEW: [
    { label: "company.allCompanies", url: ROUTES.COMPANIES },
    { label: "company.viewCompanyDetails", url: ROUTES.COMPANY_VIEW },
  ],
  EMPLOYEES: [{ label: "menu.employeeList", url: ROUTES.EMPLOYEES }],
  VARIABLES: [
    { label: "menu.settings", url: "" },
    { label: "variables.manageVariables", url: ROUTES.VARIABLES },
  ],
  USERS: [{ label: "user.userManagement", url: ROUTES.USERS }],
  COHORTS: [{ label: "cohorts.pageTitle", url: ROUTES.COHORTS }],
  CAMPAIGNS: [{ label: "menu.campaigns", url: ROUTES.CAMPAIGNS }],
  TEMPLATES: [{ label: "menu.templates", url: ROUTES.TEMPLATES }],
  JOURNEYS: [{ label: "menu.journeys", url: ROUTES.JOURNEYS }],
  CERTIFICATES: [{ label: "menu.certificates", url: ROUTES.CERTIFICATES }],
  CONTENT_LIBRARY: [
    { label: "contentLibrary.contentLibrary", url: ROUTES.CONTENT_LIBRARY },
  ],
  AUTOMATION: [{ label: "automation.automation", url: ROUTES.AUTOMATION }],
  QUESTIONNAIRE: [
    { label: "contentLibrary.contentLibrary", url: ROUTES.CONTENT_LIBRARY },
    { label: "contentLibrary.aiContent", url: ROUTES.QUESTIONNAIRE },
  ],
  PERMISSIONS: [
    { label: "menu.settings", url: "" },
    { label: "permission.permissionGroups", url: ROUTES.PERMISSIONS },
  ],
  COMMUNICATIONS: [
    { label: "menu.settings", url: "" },
    { label: "communications.communication", url: ROUTES.COMMUNICATIONS },
  ],
  LEADERBOARD_CONFIG: [
    { label: "menu.settings", url: "" },
    { label: "leaderboard.leaderboard", url: ROUTES.LEADERBOARD_CONFIG },
  ],
};

export const Validations = {
  name: {
    pattern: /^[a-zA-Z0-9 ]+$/u,
    maxLength: 30,
    minLength: 2,
  },
  description: {
    pattern: "",
    maxLength: 100,
    minLength: 2,
  },
  contentName: {
    pattern: /^[a-zA-Z0-9& ]+$/u,
    maxLength: 100,
    minLength: 2,
  },
  contentDescription: {
    pattern: "",
    maxLength: 250,
    minLength: 2,
  },
  search: {
    pattern: "",
    maxLength: 200,
    minLength: 1,
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxLength: 100,
    minLength: 5,
  },
  userName: {
    pattern: /^(?=[\p{L}\p{M}\p{Nd}].*)[\p{L}\p{M}\p{Nd}_'.-]+$/u,
    maxLength: 100,
    minLength: 5,
  },
  address: {
    pattern: /^[a-zA-Z0-9]+$/u,
    maxLength: 100,
    minLength: 2,
  },
  postalCode: {
    pattern: /^[0-9]+$/,
    maxLength: 20,
    minLength: 1,
  },
  city: {
    pattern: /^(?=[\p{L}\p{M}\p{Nd}].*)[\p{L}\p{M}\p{Nd}_' -]+$/u,
    maxLength: 50,
    minLength: 2,
  },
  phoneNumber: {
    pattern: "^\\d{6,15}$",
    maxLength: 15,
    minLength: 6,
  },
  password: {
    pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    maxLength: 200,
    minLength: 8,
  },
  assessmentText: {
    maxLength: 255,
  },
  fileName: {
    pattern: /^[a-zA-Z0-9._\-\s]+$/,
  },
};

export const ToastConfig = {
  SUCCESS: {
    timeOut: 8000,
    extendedTimeOut: 8000,
    positionClass: "toast-center-center",
  },
  WARNING: {
    timeOut: 8000,
    extendedTimeOut: 8000,
    positionClass: "toast-center-center",
  },
  ERROR: {
    timeOut: 8000,
    extendedTimeOut: 8000,
    positionClass: "toast-center-center",
  },
  INFO: {
    timeOut: 8000,
    extendedTimeOut: 8000,
    positionClass: "toast-center-center",
  },
};
