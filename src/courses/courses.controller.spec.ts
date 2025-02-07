import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be create', () => {
    const result = controller.create({ name: 'test' });
    expect(result).toHaveProperty('success', true);
  });

  it('should be findAll', () => {
    const result = controller.findAll();
    expect(result.length).toBe(1);
  });

  it('should be findOne', () => {
    const result = controller.findOne('1');
    expect(result).toHaveProperty('name');
  });

  it('should be update', () => {
    const result = controller.update('1', { name: 'test' });
    expect(result).toHaveProperty('success', true);
  });

  it('should be remove', () => {
    const result = controller.remove('1');
    expect(result).toHaveProperty('success', true);
  });
});
