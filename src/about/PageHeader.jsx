import React from 'react';

export default function PageHeader({
  title,
  crumbs = [{ label: 'Home', href: '/' }],
}) {
  return (
    <div className="full-bleed site-headerBand">
      {crumbs?.length > 0 && (
        <nav className="site-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={i}>
                  {isLast || !c.href ? (
                    <span aria-current="page">{c.label}</span>
                  ) : (
                    <a href={c.href}>{c.label}</a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <h1 className="site-pageTitle">{title}</h1>
    </div>
  );
}
