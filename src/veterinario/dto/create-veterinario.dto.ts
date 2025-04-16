import{ IsNumber,IsString} from 'class-validator'


export class CreateVeterinarioDto {
    @IsString()
    nomedoproduto:string;

    @IsNumber()
    quantidade:number;

    @IsNumber()
    preco:number;

    @IsString()
    cliente:string;


}
