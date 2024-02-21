import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log('Roles: ', Roles);
    console.log('context.getHandler: ', context.getHandler());
    console.log('roles: ', roles);
    console.log('request.user: ', request.body.user);
    return roles.includes(request.body.user);
  }
}
