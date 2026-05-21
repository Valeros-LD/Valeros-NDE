import { IconType } from '@ng-icons/core';
import {
  featherAlertTriangle,
  featherAlignLeft,
  featherArchive,
  featherBriefcase,
  featherCalendar,
  featherExternalLink,
  featherFileText,
  featherFilter,
  featherGrid,
  featherHome,
  featherImage,
  featherInfo,
  featherLink,
  featherList,
  featherMap,
  featherMapPin,
  featherPackage,
  featherTag,
  featherUser,
  featherUsers,
} from '@ng-icons/feather-icons';

export const ICON_REGISTRY = {
  'feather-alert-triangle': featherAlertTriangle,
  'feather-align-left': featherAlignLeft,
  'feather-archive': featherArchive,
  'feather-briefcase': featherBriefcase,
  'feather-calendar': featherCalendar,
  'feather-external-link': featherExternalLink,
  'feather-file-text': featherFileText,
  'feather-filter': featherFilter,
  'feather-grid': featherGrid,
  'feather-home': featherHome,
  'feather-image': featherImage,
  'feather-info': featherInfo,
  'feather-link': featherLink,
  'feather-list': featherList,
  'feather-map': featherMap,
  'feather-map-pin': featherMapPin,
  'feather-package': featherPackage,
  'feather-tag': featherTag,
  'feather-user': featherUser,
  'feather-users': featherUsers,
} as const;

export type IconKey = keyof typeof ICON_REGISTRY;

export function getIcon(key: IconKey): IconType {
  return ICON_REGISTRY[key];
}

export function getIconOrUndefined(key?: IconKey): IconType | undefined {
  return key ? ICON_REGISTRY[key] : undefined;
}
