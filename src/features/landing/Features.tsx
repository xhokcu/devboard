const features = [
  {
    icon: '🗂️',
    title: 'Kanban Board',
    description:
      'Visualize your workflow with columns. Move tasks from backlog to done with a clean drag and drop interface.',
  },
  {
    icon: '⚡',
    title: 'Stay Focused',
    description:
      'No clutter, no noise. Just your tasks, priorities, and deadlines in one place.',
  },
  {
    icon: '🎯',
    title: 'Priorities & Due Dates',
    description:
      'Set priority levels and deadlines on every task so you always know what needs attention first.',
  },
]

function Features() {
  return (
    <div className="px-6 pb-32">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-3"
          >
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-lg font-medium text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
