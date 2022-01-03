Vue.component("todo-item", {
    template: "#todo-item-template",

    props: {
        index: {
            type: Number,
            required: true
        },

        item: {
            type: Object,
            required: true
        }
    },

    data: function () {
        return {
            isEditing: false,
            editingText: "",
            isInvalid: false
        }
    },

    methods: {
        editItem: function () {
            this.isInvalid = false;
            this.editingText = this.item.text;
            this.isEditing = true;
        },

        saveItem: function () {
            this.isInvalid = false;

            var newText = this.editingText;

            if (newText.length === 0) {
                this.isInvalid = true;
                return;
            }

            this.$emit("save-item", this.item, this.editingText);
            this.isEditing = false;
        }
    },

    watch: {
        editingText: function (newValue) {
            if (newValue.length > 0) {
                this.isInvalid = false;
            }
        }
    }
});

new Vue({
    el: "#app",

    data: {
        newTodoText: "",
        isNewTodoTextInvalid: false,
        items: [],
        currentTodoId: 1
    },

    methods: {
        addNewTodo: function () {
            this.isNewTodoTextInvalid = false;

            var newTodoText = this.newTodoText;

            if (newTodoText === "") {
                this.isNewTodoTextInvalid = true;
                return;
            }

            this.items.push({
                id: this.currentTodoId,
                text: newTodoText,
            });

            this.newTodoText = "";
            ++this.currentTodoId;
        },

        saveItem: function (item, newText) {
            item.text = newText;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        }
    },

    watch: {
        newTodoText: function (newValue) {
            if (newValue.length > 0) {
                this.isNewTodoTextInvalid = false;
            }
        }
    }
});