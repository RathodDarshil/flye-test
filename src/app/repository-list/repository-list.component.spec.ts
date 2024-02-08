import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryListComponent } from './repository-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RepositoryListComponent],
      providers: [ApiService],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
