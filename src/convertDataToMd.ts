import * as fs from 'fs'
import { ProjectRecords, WorkRecords } from "./data"
import { Link } from './types'
import { Databases, Frameworks, Languages, Libraries, Skills, Tools } from './categories';


const getLinkMessage = (link: Link) => {
    const name = link.text ? ' ' + link.text : '';
    switch(link.type) {
        case 'docs':
            return `View${name} documentation at ${link.url}`
        case 'executable':
            return `Download${name} at ${link.url}`
        case 'google_play':
            return `Download${name} on Google Play store at ${link.url}`
        case 'npm':
            return `View${name} on NPM at ${link.url}`
        case 'source_code':
            return `View${name} source code at ${link.url}`
        case 'website':
            return `View${name} website at ${link.url}`
        case 'youtube':
            return `View${name} youtube video at ${link.url}`
        default:
            return ''
    }
}

if (fs.existsSync('workRecords.md'))
    fs.rmSync('workRecords.md')
var work = fs.createWriteStream('workRecords.md', {flags:'a'});

WorkRecords.forEach(rec => {
    work.write(`# ${rec.title} at ${rec.employer}\n`)
    work.write(`From ${rec.start.toDateString()} to ${rec.end?.toDateString() ?? 'now'}\n\n`)
    work.write("## Summary\n")
    work.write(rec.summary + "\n")
    rec.bullets.forEach(b => work.write(`- ${b}\n`))
    work.write('\n')
    if (rec.databases.length > 0) {
        work.write(`## Skills involved\n`)
        work.write(rec.skills.map(db => Skills[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.databases.length > 0) {
        work.write(`## Databases used\n`)
        work.write(rec.databases.map(db => Databases[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.languages.length > 0) {
        work.write(`## Programming Languages used\n`)
        work.write(rec.languages.map(db => Languages[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.libraries.length > 0) {
        work.write(`## Libraries used\n`)
        work.write(rec.libraries.map(db => Libraries[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.frameworks.length > 0) {
        work.write(`## Frameworks used\n`)
        work.write(rec.frameworks.map(db => Frameworks[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.tools.length > 0) {
        work.write(`## Tools used\n`)
        work.write(rec.tools.map(db => Tools[db].name).join(', '))
        work.write('\n\n')
    }
    if (rec.links.length > 0) {
        work.write(`## Links\n`)
        rec.links.forEach(link => work.write(getLinkMessage(link) + '\n'))
        work.write('\n')
    }
})

work.end();


if (fs.existsSync('projectRecords.md'))
    fs.rmSync('projectRecords.md')
var proj = fs.createWriteStream('projectRecords.md', {flags:'a'});

ProjectRecords.forEach(rec => {
    proj.write(`# ${rec.title}\n`)
    proj.write(`Released on ${rec.start.toDateString()}\n\n`)
    proj.write("## Summary\n")
    proj.write(rec.summary + "\n")
    rec.bullets.forEach(b => proj.write(`- ${b}\n`))
    proj.write('\n')
    if (rec.databases.length > 0) {
        proj.write(`## Skills involved\n`)
        proj.write(rec.skills.map(db => Skills[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.databases.length > 0) {
        proj.write(`## Databases used\n`)
        proj.write(rec.databases.map(db => Databases[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.languages.length > 0) {
        proj.write(`## Programming Languages used\n`)
        proj.write(rec.languages.map(db => Languages[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.libraries.length > 0) {
        proj.write(`## Libraries used\n`)
        proj.write(rec.libraries.map(db => Libraries[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.frameworks.length > 0) {
        proj.write(`## Frameworks used\n`)
        proj.write(rec.frameworks.map(db => Frameworks[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.tools.length > 0) {
        proj.write(`## Tools used\n`)
        proj.write(rec.tools.map(db => Tools[db].name).join(', '))
        proj.write('\n\n')
    }
    if (rec.links.length > 0) {
        proj.write(`## Links\n`)
        rec.links.forEach(link => proj.write(getLinkMessage(link) + '\n'))
        proj.write('\n')
    }
})

proj.end();