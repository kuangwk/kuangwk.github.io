	var vm = new Q({
		el: '#demo',
		data: {
			title: '简单的todos mvc',
			todos: [{
				text:'The world is big, I want to see see!',
				isDone: false
			}],
		},
		directives: {
			middleline: function(value){
				if (value) {
					$(this.el).css('text-decoration' ,'line-through');
				} else {
					$(this.el).css('text-decoration' ,'none');
				}
			}		
		},
		methods: {
			addItem: function(e) {
				var target = e.target
				var value = target.previousElementSibling.value;
				if (!value) return;
				this.todos.push({text: value, isDone: false});
				target.previousElementSibling.value = '';
			},
			checkItem: function(item, e) {
				item.$set('isDone', $(e.target).attr('checked'));
			},
			deleteItem: function(item) {
				this.todos.splice(item.$key(), 1);
			}
		},
		ready: function() {
			$(this.$el).show();
			$('#loading').hide();
		}
	});