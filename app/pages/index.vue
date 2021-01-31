<template>
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-2 left-menu">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action"
                           v-for="todo in todoList"
                           :class="selectTodo(todo.id) ? 'list-group-item-primary' : ''"
                        >{{ todo.name }}</a>
                    </div>
                    <div class="add-todo">
                        <fa class="add-todo_btn" :icon="['fas', 'plus']"/>
                    </div>
                </div>
                <div class="col-8">

                    <div class="todo">

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Title..."
                               v-model="name"
                               aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                                @click="add()"
                        >Add</button>
                      </div>

                      <ul class="list-group">
                        <li class="todo-list list-group-item" v-for="(item, index) in todo.list">
                            <div class="todo-list_name" :class="item.performed ? 'todo-list_name__crossed-out' : ''">
                                {{ item.name }}
                            </div>
                            <div>
                                <fa class="todo-list_control todo-list_control__blue"
                                    @click="item.performed = !item.performed"
                                    :class="!item.performed ? '' : 'todo-list_control__active'"
                                    :icon="['far', 'check-square']"/>
                                <fa class="todo-list_control todo-list_control__blue"
                                    @click="item.performed = !item.performed"
                                    :class="item.performed ? '' : 'todo-list_control__active'"
                                    :icon="['far', 'square']"/>
                                <fa class="todo-list_control todo-list_control__red todo-list_control__active"
                                    @click="del(index)"
                                    :icon="['far', 'trash-alt']"/>
                            </div>
                        </li>
                      </ul>

                    </div>

                </div>

                <div class="col-2">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            todoList: [
                { id: 1, name: 'test 1' },
                { id: 2, name: 'test 2' },
                { id: 3, name: 'test 3' },
                { id: 4, name: 'test 4' },
            ],
            todo: {
                id: 2,
                name: 'test 2',
                list: [
                    // performed - выполнено
                    { id: 1, name: 'note 1', performed: true },
                    { id: 2, name: 'note 2', performed: false },
                    { id: 3, name: 'note 3', performed: false },
                ]
            },
        }),
        methods: {
            selectTodo(id) {
                return this.todo.id === id;
            },
            add() {
                if(this.name) {
                    this.todo.list.push({
                        id: this.todo.list.length + 1,
                        name: this.name,
                        performed: false
                    });
                    this.name = '';
                }
            },
            del(ind) {
                this.todo.list.splice(ind,1);
            },
            addTodo() {

            }
        }
    }
</script>

<style lang="scss" >
    .container-fluid {
        height: 100vh;
        & .row {
            height: 100%;
        }
    }
    .add-todo {
        text-align: center;
        padding: 5px 0;
        &_btn {
            cursor: pointer;
            font-size: 15px;
            &:hover {
                color: #209802;
            }
        }
    }
    .left-menu {
        padding: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.34);
    }
    .todo {
        width: 80%;
        margin: 0 auto;
        padding-top: 50px;
        & #button-addon2 {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

    }
    .todo-list {
        display: flex;
        justify-content: space-between;
        user-select: none;
        &_name__crossed-out {
            text-decoration: line-through;
        }
        &_control {
            font-size: 16px;
            display: none;
            cursor: pointer;
            margin-left: 5px;

            &__active {
                display: inline-block;
            }
            &__red {
                &:hover {
                    color: rgba(255, 0, 0, 0.80);
                }
            }
            &__blue {
                &:hover {
                    color: rgb(0 153 222 / 99%);
                }
            }
        }
    }
</style>
