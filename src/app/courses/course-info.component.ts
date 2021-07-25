import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

// diz que a classe é um componente, não há necessidade de passar o selector, porque será exibido via rota
@Component({
    templateUrl: './course-info.component.html'
})

// ao inicializar o componente vai carregar o id do curso
export class CourseInfoComponent implements OnInit {

    course: Course;

    // faz a injeção de dependência e pega a rota que está ativa e com isso vai pegar as informações do path variable
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }
    
    
    ngOnInit(): void { 
        // iguala o curso do componente ao retorno da requisição do http
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({

            next: course => this.course = course, // caso a requisição deu certo
            error: err => console.log('Error', err) // caso aconteça algum problema
        });
    }

    save(): void {
        // vai chamar o courseService.save e vai passar o curso que está sendo trabalhado no formulário
        this.courseService.save(this.course).subscribe({
            
            next: course => console.log('Saved with success', course), // caso a requisição deu certo
            error: err => console.log('Error', err) // caso aconteça algum problema
        });
    }

}