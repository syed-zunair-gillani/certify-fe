import { NextSchemaScript } from '@operationnation/sanity-plugin-schema-markup/NextSchemaScript'
import { type Schema } from '@operationnation/sanity-plugin-schema-markup'

interface Props {
  schema?: Schema[]
  projectId: string
  dataset: string
}

const SchemaMarkup = ({ schema, projectId, dataset }: Props): JSX.Element => {
  if (schema != null) {
    return (
      <NextSchemaScript schema={schema} projectId={projectId} dataset={dataset} />
    )
  } else {
    return <></>
  }
}

export default SchemaMarkup
