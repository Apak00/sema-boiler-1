import { stringify } from 'query-string';
import speakingurl from 'speakingurl';
import { helpers } from '@adesso-modules/common/dist';
import history from '@router/history';

export interface IRouteBase {
  name: string;
  title: string;
  fullTitle: string;
  path: string;
  fullPath: string;
  isPublic: boolean;
  toUrl: (pathParams?: KV, queryParams?: KV) => string;
}

type RouteBaseProps = {
  name: string;
  path?: string;
  title?: string;
  isPublic?: boolean;
  parent?: RouteBase;
  children?: { [key: string]: RouteBase };
};

type KV = { [key: string]: any };

class RouteBase implements IRouteBase {
  public name: string;

  public title: string;

  public path: string;

  public isPublic: boolean;

  public parent?: RouteBase;

  public fullPath: string;

  public fullTitle: string;

  public children: { [key: string]: RouteBase } | null;

  constructor(props: RouteBaseProps) {
    this.name = props.name;
    this.title = props.title ? helpers.capitalize(props.title) : helpers.capitalize(props.name);
    this.parent = props.parent;
    this.isPublic = props.isPublic || false;
    const path = props.path ? speakingurl(props.path) : `/${speakingurl(props.name)}`;

    this.path = this.isPublic ? path : `/admin${path}`;
    this.fullPath = '';
    this.fullTitle = '';
    this.children = null;

    this.toFullPath();
    this.toFullTitle();
  }

  private toFullPath() {
    let returnUrl = '';
    if (this.parent) {
      returnUrl = this.parent.toFullPath();
    }

    returnUrl += this.parent ? this.path.replace('/admin', '') : this.path;

    this.fullPath = returnUrl;
    return returnUrl;
  }

  private toFullTitle() {
    let returnTitle = '';
    if (this.parent) {
      returnTitle = this.parent.toFullTitle();
    }

    returnTitle += this.parent ? `/${this.title}` : this.title;

    this.fullTitle = returnTitle;
    return returnTitle;
  }

  toUrl = (pathParams?: KV, queryParams?: KV, full?: boolean) => {
    let url: string = (full ? this.fullPath : this.path) || '';
    if (pathParams) {
      Object.keys(pathParams).forEach((key: string) => {
        url = url.replace(`:${key}`, pathParams[key]);
      });
    }

    if (queryParams) {
      url = `${url}?${stringify(queryParams)}`;
    }
    return url;
  };

  public static toBreadcrumbList = (searchRoutes: { [k: string]: RouteBase }) => {
    const list: RouteBase[] = [];
    const fillBreadcrumbList = (routes: { [k: string]: RouteBase }) => {
      Object.keys(routes).map(key => {
        if (history.location.pathname.includes(routes[key].fullPath)) {
          list.push(routes[key]);
        }
        const { children } = routes[key];
        if (children) {
          fillBreadcrumbList(children);
        }
      });
    };
    fillBreadcrumbList(searchRoutes);

    return list;
  };
}

export default RouteBase;
