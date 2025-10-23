```js
export default function ProjectCard({ project }) {
return (
<article className="p-4 border rounded hover:shadow">
<h3 className="font-semibold">{project.title}</h3>
<p className="text-sm text-slate-600 mt-1">{project.desc}</p>
<a href={project.link} className="mt-3 inline-block text-sm">View →</a>
</article>
)
}
```
