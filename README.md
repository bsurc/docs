# Boise State Research Computing Documentation

This is a repository holds a proposed structure and protocol for Research
Computing (RCS) documentation.  The general process is described here, as well
as some possible additions.

## Format

Markdown is a common format for documentation in general and it can be used in
various documentation services.  It is simple to read in it's raw format, and
can be translated into many other formats via common tools, such as markdown,
pandoc, etc.  This gives us several options to serve the documentation to end
users, including directly from the repository.

## Repository

The raw markdown documentation will be stored on the RC Github repository.
Github is widely considered to be the de-facto source hosting site, and allows
rendering and editing directly in the browser.  Most of the RC staff is
familiar with Github

## Dissemination

The documentation will be available to end users via either a third party
service, such as Github sites, readthedocs.io, or from an internal
(\*.boisestate.edu) server.  If the documentation is hosted on an internal
server, it would allow for authorization-based access (see below).

## Organization

The documentation will be split into categories such as 'High Performance
Computing', 'Programming Services', etc.  There may also be categories for
specific end users, such as Boise State students/employees/alumni, Idaho Power
employees, or just RC staff.  This is dependent on how the data is hosted.

### Possible Structure

```
docs/
├── hpc/
│   ├── borah/
│   ├── r2/
│   └── user_guide.md
│
├── boisestate/
│   └── rc/
│
├── ipc/
│
└── prog/
```

## Process

The building/updating/rendering of the documentation will be automated via
Github workflows.  Changes will only have to be submitted via Github where
they'll eventually be pushed to the endpoint.  This process is dependant on
where the final product lives.  Some services pull directly from Github.
