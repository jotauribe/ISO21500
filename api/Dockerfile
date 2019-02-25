FROM php:7

# Install dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  locales \
  libmcrypt-dev \
  openssl \
  zip \
  curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# ENV PATH="~/.composer/vendor/bin:./vendor/bin:${PATH}"

# Intall php extensions
RUN pecl install mcrypt-1.0.2 \
    && docker-php-ext-enable mcrypt \
    && docker-php-ext-install pdo mbstring

WORKDIR /api

# Copying project code to container
COPY /src/ .

# Install project dependencies
RUN composer install

CMD php -S 0.0.0.0:8000 -t ./public

EXPOSE 8000