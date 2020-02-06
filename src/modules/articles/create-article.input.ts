import { IsNotEmpty } from 'class-validator';

export class CreateArticleInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;
}
