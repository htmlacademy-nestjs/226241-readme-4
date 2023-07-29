import { User } from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  public _id?: string;
  public email: string;
  public name: string;
  public avatar?: string;
  public passwordHash: string;
  public createAt: Date;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {
      _id: this._id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      createAt: this.createAt,
    };
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.name = blogUser.name;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
    this.createAt = blogUser.createAt;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
