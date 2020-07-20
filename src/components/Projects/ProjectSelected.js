import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Icons from '../Knowledge/Icons';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const BigProjectItem = styled.div`
  background-image: url(${({ selected }) => selected.backgroundImg});
  background-position: center;
  background-size: cover;

  border-radius: 25px;
  width: 70%;
  padding-bottom: calc(56.25% * 0.7);
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
  margin: auto;
  overflow: hidden;

  .arrow {
    position: absolute;
    top: calc(50% - 20px);
    border-radius: 50%;
    color: rgb(225, 225, 225);
    box-shadow: 0 0 0px black;
    background: rgba(0, 0, 0, 0.1);
    transition: color 250ms, background 250ms, box-shadow 250ms, transform 250ms;
    cursor: pointer;
    margin: 20px;
    font-size: 40px;
    z-index: 1;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    &:hover {
      color: #ffffff;
      box-shadow: 0 0 1px black;
      background: rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }
  }
`;

const GithubIconLink = styled.a`
  display: block;
  color: #ffffff;
  opacity: 0.8;
  position: absolute;
  /* right: 0;
  top: 0; */
  z-index: 2;
  margin: 20px;
  transition: opacity 250ms;

  &:hover {
    opacity: 1;
  }
`;

const TextOverlay = styled.div`
  opacity: ${({ hideTextContainer }) => (hideTextContainer ? '0' : '0.9')};
  transition: opacity 500ms, background 500ms;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;

  h1,
  p,
  a {
    color: white;
    text-shadow: 0px 0px 20px black;
    transition: background 500ms;
  }

  a#title {
    z-index: 1;
    height: 50px;
    position: relative;
    display: block;
    text-decoration: none;
    color: white;
    font-size: 2em;
    font-weight: bolder;
    width: max-content;
    margin: 15px auto;
    transition: text-decoration cubic-bezier(0.35, 0.89, 0.34, 0.92);

    svg {
      margin-left: 10px;
    }

    &:hover {
      text-decoration: underline white solid 3px;
    }
  }

  &:hover {
    opacity: 1;
  }
`;

const LanguagesUsed = styled.div`
  position: absolute;
  bottom: 10px;
  opacity: 1;
  transition: opacity 250ms;

  svg {
    margin: 10px;
  }
`;

const ImageSlideShow = styled.div`
  /* background: rgba(0, 0, 0, 0.75); */
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  transform: ${({ index }) => `translateX(calc(${Math.max(0, index)}*-100%))`};
  transition: transform 500ms cubic-bezier(0.65, 0.05, 0.36, 1);

  img {
    width: 100%;
    height: 100%;
  }
`;

export default React.forwardRef(({ selected }, ref) => {
  const [image, setImage] = useState({ direction: 'right', index: 0 });
  const arrow1ref = useRef();
  const arrow2ref = useRef();
  const [hideTextContainer, sethideTextContainer] = useState();

  const handleOnCick = useCallback(
    (direction) => {
      if (direction === 'Right') {
        setImage((curr) => {
          return { direction, index: Math.min(selected.images.length - 1, curr.index + 1) };
        });
      } else {
        setImage((curr) => {
          return { direction, index: Math.max(0, curr.index - 1) };
        });
      }
    },
    [selected.images.length],
  );

  const handleMouseOver = () => {
    sethideTextContainer(true);
  };
  const handleMouseOut = () => {
    sethideTextContainer(false);
  };

  useEffect(() => {
    const arrow1 = arrow1ref.current;
    const arrow2 = arrow2ref.current;
    const handleArrowNavigation = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          handleOnCick('Left');
          break;
        case 'ArrowRight':
          handleOnCick('Right');
          break;
        default:
          handleOnCick('Right');
          break;
      }
    };
    if (arrow1 && arrow2) {
      arrow1.addEventListener('mouseenter', handleMouseOver);
      arrow1.addEventListener('mouseleave', handleMouseOut);
      arrow2.addEventListener('mouseenter', handleMouseOver);
      arrow2.addEventListener('mouseleave', handleMouseOut);
      document.body.addEventListener('keydown', handleArrowNavigation);

      return () => {
        arrow1.removeEventListener('mouseenter', handleMouseOver);
        arrow1.removeEventListener('mouseleave', handleMouseOut);
        arrow2.removeEventListener('mouseenter', handleMouseOver);
        arrow2.removeEventListener('mouseleave', handleMouseOut);
        document.body.addEventListener('keydown', handleArrowNavigation);
      };
    }
  }, [handleOnCick]);

  return (
    <BigProjectItem classNames='TextOverlay' ref={ref} selected={selected}>
      <ImageSlideShow index={image.index}>
        {Array.isArray(selected.images) ? (
          selected.images.map((image) => {
            return <img key={image} src={image} alt='' />;
          })
        ) : (
          <img key={selected.images} src={selected.images} alt='' />
        )}
      </ImageSlideShow>
      {Array.isArray(selected.images) && selected.images.length > 1 && (
        <KeyboardArrowLeftOutlinedIcon
          className='arrow left'
          ref={arrow1ref}
          onClick={() => {
            handleOnCick('Left');
          }}
        />
      )}
      {Array.isArray(selected.images) && selected.images.length > 1 && (
        <KeyboardArrowRightOutlinedIcon
          className='arrow right'
          ref={arrow2ref}
          onClick={() => {
            handleOnCick('Right');
          }}
        />
      )}
      <TextOverlay hideTextContainer={hideTextContainer}>
        <GithubIconLink href={selected.githubLink}>
          <GitHubIcon />
        </GithubIconLink>
        <a id='title' href={selected.link}>
          {selected.title}
          <LaunchIcon size={'inherit'} />
        </a>
        <p>{selected.bigText}</p>
        <LanguagesUsed id='LanguagesUsed'>{Icons(selected.languages, 50)}</LanguagesUsed>
      </TextOverlay>
    </BigProjectItem>
  );
});
