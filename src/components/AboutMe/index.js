import React, { useContext } from 'react';
import styled from 'styled-components';
import LazyLoading from '../LazyLoading';
import { TitleLink } from '../SharedStyledComponents';
import ThemeContext from '../Theme/ThemeContext';

const Container = styled.div`
  min-height: 400px;
  color: ${({ theme }) => theme.color};
  margin: 100px auto;
  width: 50%;
  min-width: 500px;
  font-size: 1.1rem;
  text-align: start;
  letter-spacing: 0.5px;
`;

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <TitleLink title='A little bit about me' href='#about_me' />
      <LazyLoading height={25} width={'100%'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget metus ut nulla
          elementum eleifend. Aliquam consequat massa facilisis, vulputate enim non, convallis ante.
          Donec imperdiet nunc ante, lacinia suscipit massa pulvinar luctus. Nam id leo arcu. Duis
          lobortis, nisl id vulputate malesuada, lorem nisi tempus odio, ac tincidunt ante felis ut
          nunc. Nunc vitae cursus purus. Maecenas quis convallis arcu, a lacinia arcu. Suspendisse
          vestibulum dignissim pharetra. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Pellentesque at pharetra ex. In et justo nisi.
        </p>

        <p>
          In vitae risus magna. Aliquam id gravida sapien, ac lobortis mauris. Duis ullamcorper
          sollicitudin magna nec rutrum. Duis tempus convallis turpis, at hendrerit lectus sagittis
          ut. Fusce ac sem a velit accumsan varius ut in erat. Praesent et turpis viverra, tincidunt
          felis eu, ullamcorper enim. Vestibulum commodo nulla et mauris volutpat, nec vehicula
          nulla vestibulum. Morbi ullamcorper lacus sit amet elit feugiat mattis. Praesent viverra
          eros quis massa porta, at imperdiet nisl tempor.
        </p>

        <p>
          Mauris aliquet lorem et dolor volutpat, nec tempor enim blandit. Maecenas rutrum vitae
          elit vel dictum. Nunc et vestibulum dui. Aliquam vehicula mauris at dui porttitor, non
          ultricies metus scelerisque. In quam tellus, sodales vel mi vitae, aliquam commodo sapien.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nunc pellentesque ligula a massa fermentum, eget accumsan augue suscipit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis ac massa elementum, tristique nibh quis,
          consequat turpis.
        </p>

        <p>
          Nullam a risus at odio dignissim mattis. In hac habitasse platea dictumst. Sed id eleifend
          neque. Cras maximus urna lobortis, suscipit lacus quis, pellentesque mi. Morbi convallis
          dapibus diam non tristique. Proin eu massa dignissim, euismod ipsum et, posuere mi. Donec
          sed gravida quam. Cras ut venenatis lacus. Morbi in scelerisque purus. Praesent quis
          lobortis lectus. Quisque aliquet dolor vel consequat malesuada.
        </p>

        <p>
          Ut ac lacus sed justo pulvinar volutpat sed sit amet sapien. Integer nisl mi, pretium ac
          massa et, pretium porttitor elit. Maecenas iaculis lobortis arcu. Nullam quis laoreet
          mauris. Maecenas vel eros sit amet lectus viverra euismod vel eget urna. Aenean purus
          massa, lobortis sit amet venenatis eget, ultrices vitae sapien. Nunc vel nunc at lacus
          laoreet aliquet. Phasellus sit amet dolor lorem. Cras consectetur posuere mi, sit amet
          euismod mauris consectetur id.{' '}
        </p>
      </LazyLoading>
    </Container>
  );
};
