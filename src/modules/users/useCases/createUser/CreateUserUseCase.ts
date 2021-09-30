/* eslint-disable prettier/prettier */

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAllreadyExists = this.usersRepository.findByEmail(email);

    if(userAllreadyExists) {
      throw new Error("Mensagem do erro");
    }

    const user = this.usersRepository.create({ email, name});
    return user;
  }
}

export { CreateUserUseCase };
