const { isTSAnyKeyword } = require('@babel/types');
// const { describe } = require('yargs');
const { addTaskInput, myToDos, addTask, deleteTaskInput } = require('./to-do-list');
const toDoList = require('./to-do-list');

describe('to-do-list', ()=> {
    // describe('addTaskInput', ()=> {
    //     it('should return array with 2 elements, first is task string, second is done/undone', ()=> {
    //         const result = toDoList.addTaskInput();

    //         const expected = [result[0], result[1]];

    //         expect(result).toEqual(expected);
    //     });
    // });
    describe('addTask', ()=> {
        it('should create new object and add it to to-do array', ()=> {
            const input = addTaskInput()
            const newTask = toDoList.addTask(input);

            const expected = {task: input[0], status: input[1]};

            expect(newTask).toEqual(expected);
        })
    })

    describe('deleteTask', ()=> {
        it("should delete element at input's index", ()=> {
            const input = toDoList.deleteTaskInput().toLowerCase();

            const result = toDoList.deleteTask(input);

            expect(result).toEqual(input);
        })

        it("should throw error when task isn't found", () => {
            const input = toDoList.deleteTaskInput().toLowerCase();

            // const result = toDoList.deleteTask(input);

            expect(() => {
                toDoList.deleteTask(input);
            }).toThrow("task isn't found!");
        });
    });
    

    describe('markAsDone', ()=> {
        it('should mark a specific task status as done', ()=> {
            const input = toDoList.doneOrUndoneInput().toLowerCase();

            const result = toDoList.markAsDone(input);

            expect(result).toEqual(input);
        })
    })
    describe('unMarkAsDone', ()=> {
        it('should mark a specific task status as not done', ()=> {
            const input = toDoList.doneOrUndoneInput().toLowerCase();

            const result = toDoList.unMarkAsDone(input);

            expect(result).toEqual(input);
        })
    })

    // describe('listByStatus', ()=> {
    //     it('should return the list sorted by status, "done" at the end', ()=> {
            

    //     })
    // })


})
