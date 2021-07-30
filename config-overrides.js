import { alias, configPaths } from 'react-app-rewire-alias'

export default function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config)
}
