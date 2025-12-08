import { mergeConfig, type UserConfig } from 'vite'

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    // Add your custom Vite configuration options here
    server: {
      allowedHosts: true, // Example: allows all hosts for development
    },
    // Other Vite options like plugins, build, etc.
  })
}
