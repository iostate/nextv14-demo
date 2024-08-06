type DocsParams = {
    params: {
        slug: string[]
    }
}

const Docs = ({ params }: DocsParams) => {

    if (params.slug?.length === 1) {
        return (<div>
            <h1>Viewing Docs About Feature {params.slug[0]}</h1>
        </div>)
    } else if (params.slug?.length === 2) {
        return (<div>
            <h1>Viewing Docs About Feature {params.slug[0]}</h1>
            <h2>Viewiing Concept {params.slug[1]}</h2>
        </div>)
    }
    return (<div>
        <h1>Docs Home Page</h1>
    </div>)
}

export default Docs;
