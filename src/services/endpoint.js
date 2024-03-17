let endpoint = {
    CRUD_OPERATION :'/users/api/getData',
}

export let API_BOOK = {
		CRUD_DATA_API: {
			url: endpoint.CRUD_OPERATION,
			method: 'GET',
			data: null,
			params: {},
			baseUrlType: 'CRUD_BASE_URL'
		},
    }