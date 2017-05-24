export default {
	app: {
		title: "Micro Expense Tracker",
		subtitle: "Track your daily expenses faster than you can type!"
	},
	common: {
		currency_wrap: '${{value}}',
		currency_prefix: '$',
		currency_suffix: '',
	},
	navigation: {
		main_menu: 'Main menu:',
		categories: "Categories",
		summary: "Summary",
		expenses: "Expenses"
	},
	footer: {
		made_by: 'Website made by <a href="http://mauft.com">Maurycy Zarzycki Mauft.com</a>.',
		thanks: 'MET is powered by <a href="http://emberjs.com/">Ember.js</a>, the best framework for single-page browser apps.',

		header_1: "Security & Privacy",
		header_2: "Data storage",
		header_3: "Help",
		body_1: "Micro Expense Tracker is designed to not send any information you enter over the internet, thus making it as secure as your browser and computer. I do my best to ensure no unauthorized people can access the hosted files and modify them. Nevertheless I take no responsibility or liability, so far as legally possible, for any damages or stolen information.",
		body_2: "Micro Expense Tracker uses local storage for storing everything you enter and as such it is suspectible for being lost in certain cases. Because it was made primarily for personal use it is unsure whether a more elaborate mechanisms will be added in the future. Use with caution!",
		body_3: "If you like this project, want to help it grow or have questions please use the <a href='https://github.com/RetrocadeNet/MicroExpenseTracker/issues'>issues board</a> on GitHub. If you need to contact the author please use <a href='mailto:maurycy.zarzycki@mauft.com'>maurycy.zarzycki@mauft.com</a>"
	},
	section: {
		categories: {
			title: "Expense categories",

			index: {
				operations: "Operations",
				add_new_category: "Add new category",
				name_path: "Name",
				actions: "Actions",
				action: {
					edit: 'Edit category "{{category}}"',
					delete: 'Delete category "{{category}}"'
				}
			},
			new: {
				title: "Create a new category"
			},
			edit: {
				title: 'Edit category "{{title}}"'
			},
			form: {
				name: "Name",
				parent: "Parent category",
				parent_none: "<top-level category>",
				save: "Save",
				cancel: "Cancel"
			},
			notifications: {
				created: 'Category "{{{name}}}" was added successfully.',
				deleted: 'Category "{{{name}}}" was permanently removed.',
				updated: 'Category "{{{name}}}" was updated successfully.',
				save_failed: 'Failed to save the category, reason: {{error}}.',
				missing_category_update: "The edited category no longer exists and cannot be modified."
			}
		},
		expenses: {
			title: 'Expenses',

			index: {
				operations: "Operations",
				add_new_receipt: "Add a new receipt",
				product: "Product",
				final_price: "Final Price",
				missing_category: "&lt;no category&gt;",
				category: "Category",
				expense_date: "Expense date",
				missing_expense_date: "&lt;no date&gt;",
				actions: "Actions",
				action: {
					edit: 'Edit expense "{{expense}}"',
					delete: 'Delete expense "{{expense}}"'
				}
			},

			new_receipt: {
				title: "Add a new receipt",
				save: "Save",
				cancel: "Cancel",
				receipt_date: "Receipt date",
				expenses: "Expenses",
				name_placeholder: "Expense name",
				price_placeholder: "Price",
				category_placeholder: "Category",
				discount_placeholder: "Discount"
			},

			notifications: {
				created_receipt: 'Receipt was added successfully.',
				fix_form: 'Errors have been found in the form. Please fix the highlighted fields.',
				deleted: 'Expense "{{{name}}}" was permanently removed.'
			}
		},

		summary: {
			no_category: 'Bez kategorii',
			total: 'Total'
		}
	}
};