export default {
	title: 'COVID Hub'
	,name: 'covidHubItem'
	,type: 'document'
	,fields: [
		{
			title: 'Category'
			,name: 'category'
			,type: 'string'
			,options: {
				list: [
					{ title: 'Articles', value: 'articles' }
					,{ title: 'Government & Courts', value: 'government' }
					,{ title: 'Insurance & Reinsurance', value: 'insurance' }
					,{ title: 'Other Useful Information', value: 'others' }
				]
			}
			,validation: Rule => Rule.required().error( 'A Category is required' )
		}
		,{
			title: 'Title'
			,name: 'title'
			,type: 'string'
			,validation: Rule => Rule.required().error( 'A Title is required' )
		}
		,{
			title: 'Link'
			,name: 'link'
			,type: 'string'
			,validation: Rule => Rule.required().error( 'A Link is required' )
		}
	]
}
