import { Component } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';



@Component(
{
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})




export class AppComponent
{
  	title = 'CTreeview';
	config = TreeviewConfig.create(
	{
		hasAllCheckBox: true,
		hasFilter: true,
		hasCollapseExpand: true,
		decoupleChildFromParent: false,
		//maxHeight: 400
	});


 	section = new TreeviewItem(
	{
		text: "IT",
		value: 9,
		children:
		[
			{
				text: "Programming",
				value: 91,
				children:
				[
					{
						text: "Frontend",
						value: 911,
						children:
						[
							{
								text: "Angular 1",
								value: 9111
							},
							{ 
								text: "Angular 2",
								value: 9112
							},
							{ 
								text: "ReactJS",
								value: 9113
							},
						],
					},
					{
						text: "Backend",
						value: 912,
						children:
						[
							{ 
								text: "C#",
								value: 9121
							},
							{
								text: "Java",
								value: 9122,
								disabled:true
							},
							{
								text: "Python",
								value: 9123,
								checked: false
							},
						],
					},
				],
			},
			{
				text: "Networking",
				value: 92,
				children:
				[
					{
						text: "Internet",
						value: 921
					},
					{
						text: "Security",
						value: 922
					},
				],
			},
		],
	});

	items: TreeviewItem[];

	btn = "btn btn-dark";

	diss = false;


	constructor()
	{
		this.items = [this.section];
	}

	ngOnInit()
	{
	}

	onSelectedChange(evt:any)
	{
		console.log(evt)
	}


	onFilterChange(evt:any)
	{
		console.log(evt)
	}


}