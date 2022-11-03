import React from 'react'
import ContentLoader from 'react-content-loader'

const TodoSkeleton = props => {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={300}
      viewBox="0 0 800 300"
      backgroundColor="#fc94af"
      foregroundColor="#fda4b4"
      {...props}
    >
      <rect x="42" y="10" rx="4" ry="4" width="543" height="45" />
      <rect x="2" y="10" rx="4" ry="4" width="35" height="45" />
      <rect x="42" y="66" rx="4" ry="4" width="543" height="45" />
      <rect x="2" y="66" rx="4" ry="4" width="35" height="45" />
      <rect x="42" y="123" rx="4" ry="4" width="543" height="45" />
      <rect x="2" y="123" rx="4" ry="4" width="35" height="45" />
      <rect x="42" y="183" rx="4" ry="4" width="543" height="45" />
      <rect x="2" y="183" rx="4" ry="4" width="35" height="45" />
    </ContentLoader>
  )
}

TodoSkeleton.metadata = {
  name: 'Arfath Tade', // My name
  github: 'arfath77', // Github username
  description:
    'Global sidebar with tabs containig search bar and list of options', // Little tagline
  filename: 'TodoSkeleton', // filename of your loader
}

export {TodoSkeleton}