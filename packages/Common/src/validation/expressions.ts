export const EMAIL_VALIDATION_REGEXP: RegExp = new RegExp(
  '^([a-z0-9\\+_\\-]+)(.[a-z0-9\\+_\\-]+)*@([a-z0-9\\-]+.)+[a-z]{2,6}$',
  'gi',
);
export const PASSPORT_VALIDATION_REGEXP: RegExp = new RegExp('^[a-zA-Z0-9]{1,20}$');
export const YOUTUBE_REGEXP: RegExp = new RegExp('^(http(s)?://)?((w){3}.)?(youtu(be|.be))?(.com)?/.+');
export const YOUTUBE_OR_VIMEO_REGEXP: RegExp = new RegExp('^(http(s)?://)?((w){3}.)?(youtu(be|.be)|vimeo)?(.com)?/.+');
