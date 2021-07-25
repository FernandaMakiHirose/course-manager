import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

// diz que é um componente, passando o template onde está o html
@Component({
    templateUrl: './course-list.component.html'
})

// implementa o oninit = quando a classe for inicializada vai ocorrer alguma ação
export class CourseListComponent implements OnInit { 

    filteredCourses: Course[] = [];

    // o underline é definido quando a variável só vai existir nesse componente
    // é uma propriedade curso do tipo array
    _courses: Course[] = [];
    
    _filterBy: string;
    
    // o angular faz a injeção de dependências com o construtor: o angular vai ver que o CourseService está disponível para ser injetado e vai injetar a instância dentro do objeto do construtor
    constructor(private courseService: CourseService) { }

    ngOnInit(): void { 
        // o curso vai retornar o método adicionado
        this.retrieveAll();
    }

    // chama o Observable fazendo o subscribe
    retrieveAll(): void { 
        this.courseService.retrieveAll().subscribe({
            // callback functions
            next: courses => { // requisição deu certo
                this._courses = courses; // recebe um array de cursos
                this.filteredCourses = this._courses; // monta o filtro dos cursos
            },
            error: err => console.log('Error', err)  // se der um erro vai chamar o err
        })
    }

    // deleta o id
    deleteById(courseId: number): void { 
        this.courseService.deleteById(courseId).subscribe({
            next: () => { // requisição deu certo 
                console.log('Deleted with success'); // aparece mensagem de sucesso
                this.retrieveAll(); // método vai ser consultado
            },
            error: err => console.log('Error', err) // se der um erro vai chamar o err
        })
    }

    set filter(value: string) { 
        this._filterBy = value;

        // filtra o curso, iguala o valor do curso em memória ao filteredCourses
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
    }

}