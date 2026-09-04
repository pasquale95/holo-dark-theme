#!/usr/bin/perl
use strict;
use warnings;

my %config = (
    host => 'localhost',
    port => 8080,
);

sub connect_db {
    my ($self, %opts) = @_;
    return "dbi:mysql:dbname=$config{host};port=$opts{port}";
}

print connect_db(1, port => 3306), "\n";

# Comment: config loader
=pod
POD block comment
=cut
