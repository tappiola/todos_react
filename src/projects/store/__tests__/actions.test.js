import reducer from '../projectsAndTasksReducer';
import * as types from '../actionTypes';

const projects = [
    {id: '1', name: 'project1', description: 'description1'},
    {id: '2', name: 'project2', description: 'description2'},
    {id: '3', name: 'project3', description: 'description3'},
]

const tasks = [
    {id: '1', name: 'task1'},
    {id: '2', name: 'task2'},
    {id: '3', name: 'task3'}
]

describe('projects and tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                "error": null,
                "isProjectsFetching": true,
                "isTasksFetching": true,
                "projects": [],
                "successMessage": null,
                "tasks": []
            }
        )
    })

    it('should handle INIT_PROJECTS', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": true,
                "isTasksFetching": true,
                "projects": [],
                "successMessage": null,
                "tasks": []
            }, {
                type: types.INIT_PROJECTS,
                payload: {projects}
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": true,
            "projects": [
                {
                    "description": "description1",
                    "id": '1',
                    "name": "project1"
                },
                {
                    "description": "description2",
                    "id": '2',
                    "name": "project2"
                },
                {
                    "description": "description3",
                    "id": '3',
                    "name": "project3"
                }
            ],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle INIT_TASKS', () => {
        expect(
            reducer(undefined, {
                type: types.INIT_TASKS,
                payload: {tasks}
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": true,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": [
                {
                    id: '1',
                    name: 'task1'
                },
                {
                    id: '2',
                    name: 'task2'
                },
                {
                    id: '3',
                    name: 'task3'
                }
            ]
        })
    })

    it('should handle CLEAR_PROJECTS_AND_TASKS', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": projects,
                "successMessage": null,
                "tasks": tasks
            }, {
                type: types.CLEAR_PROJECTS_AND_TASKS
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle CLEAR_PROJECTS_AND_TASKS', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": projects,
                "successMessage": null,
                "tasks": tasks
            }, {
                type: types.CLEAR_PROJECTS_AND_TASKS
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle FB_ERROR', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": [],
                "successMessage": null,
                "tasks": []
            }, {
                type: types.FB_ERROR,
                payload: {error: "Sample error"}
            })
        ).toEqual({
            "error": "Sample error",
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle SUCCESS', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": [],
                "successMessage": null,
                "tasks": []
            }, {
                type: types.SUCCESS,
                payload: {message: "Completed successfully"}
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": "Completed successfully",
            "tasks": []
        })
    })

    it('should handle SUCCESS_DISAPPEAR', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": [],
                "successMessage": "Completed successfully",
                "tasks": []
            }, {
                type: types.SUCCESS_DISAPPEAR
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle SUCCESS_DISMISS', () => {
        expect(
            reducer({
                "error": null,
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": [],
                "successMessage": "Completed successfully",
                "tasks": []
            }, {
                type: types.SUCCESS_DISMISS
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })

    it('should handle FB_ERROR_DISMISS', () => {
        expect(
            reducer({
                "error": "Something bad happened",
                "isProjectsFetching": false,
                "isTasksFetching": false,
                "projects": [],
                "successMessage": null,
                "tasks": []
            }, {
                type: types.FB_ERROR_DISMISS
            })
        ).toEqual({
            "error": null,
            "isProjectsFetching": false,
            "isTasksFetching": false,
            "projects": [],
            "successMessage": null,
            "tasks": []
        })
    })
});
