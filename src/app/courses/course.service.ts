import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable = o Angular controla e lida com injeções de dependência 
@Injectable({
    providedIn: 'root'
})


export class CourseService { 

    // variável criada, a qual armazena o base path do backend
    private coursesUrl: string = 'http://localhost:3100/api/courses';

    // a classe foi adicionada via injeção de dependência
    constructor(private httpClient: HttpClient) { }

    // o httpCliente vai retornar um array de cursos e dentro dos parênteses a url que vai fazer a requisição
    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    // passa o id para o método, o método filtra o array de cursos e retorna um elemento com o id passado
    retrieveById(id: number): Observable<Course> { 

        // faz a requisição e pega o curso específico
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    // se tiver um id vai alterar o elemento que corresponde ao id
    save(course: Course): Observable<Course> { 

        if(course.id) { // se o id do curso estiver preenchido vai chamar o método put no backend

            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course); // como é um put precisa passar como parâmetro do método a url e o body da requisição, vai retornar o curso
        } else { 
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course); // caso não tenha id vai dar um post, vai salvar o id
        }
    }

    // deleta o curso
    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];