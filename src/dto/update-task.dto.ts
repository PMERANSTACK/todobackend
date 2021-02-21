import { TaskStatus } from "src/entity/task.entity";

export class updateTaskDTO{
    title?: string;
    description?: string;
    status?: TaskStatus;
}