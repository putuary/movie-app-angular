import { HttpInterceptorFn } from '@angular/common/http';
import { BYPASS_LOGGIN } from '../../shared/constant/context.constants';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.context.get(BYPASS_LOGGIN)) {
    return next(req);
  } else {
    const params = req.params;
    const authToken : string = localStorage.getItem('token') as string;

    const newReq = req.clone({
      params: params.append('api_key', authToken)
    });

    return next(newReq);
  }
};
