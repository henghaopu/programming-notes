import React from 'react'

function MinHeightDemo() {
  const [isTooltipEnabled, setIsTooltipEnabled] = React.useState(false)

  function handleMouseOver(
    event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  ) {
    const ddElement = event.target as HTMLElement
    if (ddElement.scrollWidth > ddElement.clientWidth) {
      setIsTooltipEnabled(true)
    } else {
      setIsTooltipEnabled(false)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontSize: '18px',
      }}
    >
      <header style={{ padding: '16px', fontSize: '22px', textAlign: 'left' }}>
        Header
      </header>
      {/* expand the wrapper that contains side and main */}
      <div
        style={{
          flexGrow: 1,
          // set minHeight: 0 to the flex child that has the overflow container
          // a flex item has default min-height: auto. This means that, by default, a flex item cannot be shorter than its content
          // reference 1: https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/
          // reference 2: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
          // reference 3: https://medium.com/@stephenbunch/how-to-make-a-scrollable-container-with-dynamic-height-using-flexbox-5914a26ae336
          // reference 4: https://stackoverflow.com/questions/42130384/why-should-i-specify-height-0-even-if-i-specified-flex-basis-0-in-css3-flexbox
          minHeight: 0,
          // no need height: '100%' and use only height 100% won't work
          // height: '100%',

          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            padding: '16px',
            fontSize: '22px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Side
        </div>
        {/* expand main which contains title and content */}
        <main
          style={{
            // use "flexGrow: 1" or "width: '100%'" when we want to occupy the rest of the horizontal space even if there's not enough content to fill up horizontally
            flexGrow: 1,
            // width: '100%',
            // minWidth: 0,
            padding: '16px',

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ paddingBottom: '8px', fontSize: '18px' }}>Title</div>
          <div
            style={{
              // use "flexGrow: 1" or "height: '100%'" when we want to occupy the rest of the vertical space even if there's not enough content to scroll vertically
              flexGrow: 1,
              // height: '100%',
              border: '2px solid darkgray',
              // *** enable vertical scroll
              overflowY: 'auto',

              // styles for its content
              padding: '1rem',
              display: 'grid',
              // *** https://css-tricks.com/you-want-minmax10px-1fr-not-1fr/ card width is able to be smaller than min-content, and the ellipsis is able to show up in the card
              gridTemplateColumns: 'repeat(4, minmax(10px, 1fr))',
              gridTemplateRows: 'repeat(4, 1fr)',
              rowGap: '1rem',
              columnGap: '1rem',
            }}
          >
            {[...Array(50).fill(0).keys()].map((item) => (
              <div
                key={item}
                style={{
                  border: '2px solid darkgray',

                  // // no need
                  // display: 'flex',
                  // flexDirection: 'row',
                }}
              >
                {/* data source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl */}
                <dl
                  style={{
                    padding: '0.5rem',

                    // // no need
                    // flexGrow: 1,
                    // minWidth: 0,
                  }}
                >
                  <dt>Beast of Bodmin</dt>
                  <dd
                    style={{
                      // https://css-tricks.com/flexbox-truncated-text/
                      // https://yatil.net/blog/text-overflow-ellipsis-harmful
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                    title={
                      isTooltipEnabled
                        ? 'A large feline inhabiting Bodmin Moor.'
                        : ''
                    }
                    onMouseOver={handleMouseOver}
                    onFocus={handleMouseOver}
                  >
                    A large feline inhabiting Bodmin Moor.
                  </dd>
                  <dt>Morgawr</dt>
                  <dd>A sea serpent.</dd>
                  <dt>Owlman</dt>
                  <dd>A giant owl-like creature.</dd>
                </dl>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer style={{ padding: '8px', fontSize: '14px', textAlign: 'right' }}>
        Footer
      </footer>
    </div>
  )
}

export default MinHeightDemo
